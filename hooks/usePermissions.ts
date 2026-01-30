"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

export type UserRole = "admin" | "user" | "viewer" | null;

export interface PermissionState {
  role: UserRole;
  subscriptionTier: string;
  subscriptionStatus: string;
  hasAccess: (productCode: string) => boolean;
  isLoading: boolean;
}

/**
 * Shared Permissions Hook
 * 
 * Fetches and manages user permissions across the 3K Pro portfolio.
 * Syncs with public.profiles and public.user_permissions.
 */
export function usePermissions(user: User | null) {
  const [state, setState] = useState<PermissionState>({
    role: null,
    subscriptionTier: "free",
    subscriptionStatus: "inactive",
    hasAccess: () => false,
    isLoading: true,
  });

  const supabase = createClient();

  useEffect(() => {
    async function fetchPermissions() {
      if (!user) {
        setState(s => ({ ...s, isLoading: false }));
        return;
      }

      try {
        // 1. Fetch Profile (Subscription Status)
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("subscription_status, subscription_tier")
          .eq("id", user.id)
          .single();

        if (profileError) throw profileError;

        // 2. Fetch Portolio-wide Permissions
        const { data: permissions, error: permError } = await supabase
          .from("user_permissions")
          .select("product_code, role")
          .eq("user_id", user.id);

        if (permError) throw permError;

        setState({
          role: null, // Global role if applicable
          subscriptionTier: profile?.subscription_tier || "free",
          subscriptionStatus: profile?.subscription_status || "inactive",
          hasAccess: (productCode: string) => {
            // Logic: Either they have an explicit permission, or they have an active subscription
            const hasExplicitPerm = permissions?.some(p => p.product_code === productCode);
            const isSubscribed = profile?.subscription_status === "active";
            
            // For now, any active subscription grants access to the "core" portfolio
            return hasExplicitPerm || isSubscribed;
          },
          isLoading: false,
        });
      } catch (error) {
        console.error("[usePermissions] Error fetching permissions:", error);
        setState(s => ({ ...s, isLoading: false }));
      }
    }

    fetchPermissions();
  }, [user]);

  return state;
}
