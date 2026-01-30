"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { monitoring } from "@/lib/monitoring";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    monitoring.captureException(error, "error", {
      context: `ErrorBoundary: ${this.props.name || "Global"}`,
      metadata: { errorInfo }
    });
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center bg-white/[0.02] border border-white/10 rounded-xl m-4">
          <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
          <p className="text-neutral-400 mb-4">The engineering team has been notified.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-white text-black rounded-lg font-medium"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
