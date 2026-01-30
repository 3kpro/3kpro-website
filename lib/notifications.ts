import { Resend } from "resend";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Unified Notification Service
 * 
 * Manages all outgoing transactional communications for the 3K Pro portfolio.
 */
class NotificationService {
  private static instance: NotificationService;
  private fromAddress = "3KPRO <system@3kpro.services>";

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  /**
   * Send Welcome Email after successful checkout
   */
  async sendWelcomeEmail(to: string, productCode: string, userName?: string) {
    const productName = this.resolveProductName(productCode);
    const dashboardUrl = this.resolveDashboardUrl(productCode);

    try {
      const { data, error } = await resend.emails.send({
        from: this.fromAddress,
        to: [to],
        subject: `[SYSTEM] Provisioning Complete: ${productName}`,
        react: React.createElement(WelcomeEmail, { productName, userName, dashboardUrl }),
      });

      if (error) {
        console.error(`[Notification] Failed to send welcome email to ${to}:`, error);
        return { success: false, error };
      }

      console.log(`[Notification] Welcome email sent to ${to} for ${productCode}`);
      return { success: true, data };
    } catch (e) {
      console.error(`[Notification] Critical error sending email:`, e);
      return { success: false, error: e };
    }
  }

  /**
   * Helper to resolve readable product names from codes
   */
  private resolveProductName(code: string): string {
    const names: Record<string, string> = {
      "reviewlens": "FairMerge",
      "cloud-ledger": "Cloud Ledger",
      "xelora": "XELORA",
      "n8n-templates": "n8n Templates",
    };
    return names[code] || code.toUpperCase();
  }

  /**
   * Helper to resolve target dashboards for products
   */
  private resolveDashboardUrl(code: string): string {
    const urls: Record<string, string> = {
      "reviewlens": "https://reviewlens.3kpro.services/dashboard",
      "cloud-ledger": "https://3kpro.services/cloud-ledger",
      "xelora": "https://getxelora.com",
    };
    return urls[code] || "https://3kpro.services/marketplace";
  }
}

export const notifications = NotificationService.getInstance();
