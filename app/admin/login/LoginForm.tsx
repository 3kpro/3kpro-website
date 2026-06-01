"use client";

import { useActionState } from "react";
import { LockKeyhole } from "lucide-react";
import { loginAdmin, type LoginState } from "./actions";

export function LoginForm({ nextPath }: { nextPath?: string }) {
  const initialState: LoginState = {};
  const [state, formAction] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="next" value={nextPath || "/admin"} />

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full border border-black bg-white px-4 py-4 text-base font-medium outline-none focus:bg-black/[0.03]"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full border border-black bg-white px-4 py-4 text-base font-medium outline-none focus:bg-black/[0.03]"
        />
      </div>

      {state.message && (
        <div className="flex items-start gap-3 border border-black bg-black/[0.03] p-4 text-sm font-medium text-black/70">
          <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <button
        type="submit"
        className="w-full border border-black bg-black px-5 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
      >
        Enter Admin
      </button>
    </form>
  );
}
