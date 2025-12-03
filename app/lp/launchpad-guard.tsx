"use client";

// No auth guard - this is your personal tool at 3kpro.services/lp
export default function LaunchpadGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
