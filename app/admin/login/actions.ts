"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { isAllowedAdminEmail } from "@/lib/admin/access";
import { createClient } from "@/lib/supabase/server";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
  next: z.string().optional(),
});

export type LoginState = {
  message?: string;
};

function getSafeNextPath(next?: string) {
  if (!next || !next.startsWith("/admin") || next.startsWith("/admin/login")) {
    return "/admin";
  }

  return next;
}

export async function loginAdmin(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    next: formData.get("next"),
  });

  if (!parsed.success) {
    return { message: parsed.error.issues[0]?.message || "Invalid login." };
  }

  const { email, password, next } = parsed.data;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return { message: "Login failed. Check the email and password." };
  }

  if (!isAllowedAdminEmail(data.user.email)) {
    await supabase.auth.signOut();
    return { message: "That account is not allowed to access admin tools." };
  }

  redirect(getSafeNextPath(next));
}

