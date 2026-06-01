const FALLBACK_ADMIN_EMAILS = ["james@3kpro.services", "jlawson808@gmail.com"];

export function getAllowedAdminEmails() {
  const configured =
    process.env.ADMIN_ALLOWED_EMAILS ||
    process.env.ADMIN_EMAILS ||
    process.env.NEXT_PUBLIC_ADMIN_ALLOWED_EMAILS ||
    "";

  const emails = configured
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return emails.length > 0 ? emails : FALLBACK_ADMIN_EMAILS;
}

export function isAllowedAdminEmail(email?: string | null) {
  if (!email) return false;
  return getAllowedAdminEmails().includes(email.trim().toLowerCase());
}

