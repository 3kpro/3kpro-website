/**
 * Central Monitoring Utility
 * 
 * Provides a unified interface for error reporting and performance tracking.
 * This can be configured to point to Sentry, Logtail, or internal dashboards.
 */

import * as Sentry from "@sentry/nextjs";

type Severity = "fatal" | "error" | "warning" | "info";

interface ErrorContext {
  product?: string;
  userId?: string;
  context?: string;
  metadata?: Record<string, any>;
  [key: string]: any;
}

class MonitoringService {
  private static instance: MonitoringService;
  private isProduction = process.env.NODE_ENV === "production";

  private constructor() {}

  static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  /**
   * Report an exception to the monitoring service
   */
  captureException(error: Error | unknown, severity: Severity = "error", context: ErrorContext = {}) {
    const errorObject = error instanceof Error ? error : new Error(String(error));
    
    // In dev, log to console
    console.error(`[Monitoring] ${severity.toUpperCase()}:`, errorObject.message);
    if (Object.keys(context).length > 0) {
      console.dir(context);
    }

    // Sentry Integration
    if (this.isProduction || process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.captureException(errorObject, { level: severity, extra: context });
    }

    // Mock Slack Alert for Critical Errors
    if (severity === "fatal" || severity === "error") {
      this.sendToSlack(errorObject, context);
    }
  }

  /**
   * Send a simplified alert to a webhook (Slack/Discord)
   */
  private async sendToSlack(error: Error, context: ErrorContext) {
    if (!this.isProduction && !process.env.NEXT_PUBLIC_FORCE_SLACK) {
        console.log(`[Alert] Dev Mode - Skipping Slack Dispatch:`, error.message);
        return;
    }

    console.log(`[Alert] Routing alert to Slack/Ops channel...`);
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("[Monitoring] No SLACK_WEBHOOK_URL configured. Skipping alert.");
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🚨 Critical System Error",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Product:*\n${context.product || "3KPRO Core"}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Environment:*\n${process.env.NODE_ENV}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Error:* ${error.message}`
                    }
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `Context: ${JSON.stringify(context.metadata || {})}`
                        }
                    ]
                }
            ]
        })
      });
    } catch (e) {
      console.error("[Monitoring] Failed to send Slack alert:", e);
    }
  }

  /**
   * Log a message or event for analytical purposes
   */
  logEvent(message: string, metadata: Record<string, any> = {}) {
     console.log(`[Event] ${message}`, metadata);
  }
}

export const monitoring = MonitoringService.getInstance();
