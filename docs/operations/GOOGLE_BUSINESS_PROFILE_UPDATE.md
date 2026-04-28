
# Google Business Profile Update Guide

This file documents the process and tools required to verify and update the 3KPRO.Services Google Business Profile programmatically.

## Task Requirements
- **Account:** james.lawson@gmail.com
- **Business Name:** 3KPRO.Services
- **Model:** Service Area Business (No local address)
- **Phone:** 918.280.8644
- **Email:** info@3pro.services
- **Services:** Promoted from 3kpro.services website.

## Prerequisites

1.  **Google Cloud Platform Project:**
    -   Go to [Google Cloud Console](https://console.cloud.google.com/).
    -   Create a project or select existing.
    -   Enable **Google Business Profile API** (and `My Business Account Management API`, `My Business Business Information API`).

2.  **Credentials:**
    -   Create **OAuth 2.0 Client IDs** (Desktop App).
    -   Download the JSON file and rename it to `credentials.json`.
    -   Place `credentials.json` in `C:\DEV\3K-Pro-Services\3kpro-website\scripts\`.

3.  **Python Environment:**
    -   Install dependencies:
        ```bash
        pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
        ```

## Running the Script

A script has been prepared to automate the update of the Phone Number. Service updates are generated as a payload for review due to category dependencies.

```bash
cd C:\DEV\3K-Pro-Services\3kpro-website\scripts
python update_gbp_profile.py
```

## Services Identified

The following services were extracted from the codebase (`app/page.tsx`) and are ready for promotion:

1.  **Website Development**: Affordable websites for small businesses. One-time fee includes design, development, and FREE hosting.
2.  **Cloud Solutions**: Scalable cloud infrastructure and migration services for modern businesses.
3.  **Custom Development**: Tailored software solutions built with cutting-edge technologies (React, Next.js, Node.js).
4.  **Data Management**: Robust database design, optimization, and data analytics services.
5.  **Cybersecurity**: Comprehensive security solutions to protect your digital assets.
6.  **Mobile Solutions**: Native and cross-platform mobile applications for iOS and Android.
7.  **Process Automation**: Streamline operations with intelligent automation and workflows.

## Manual Verification Steps
If CLI execution is not preferred, verify these specific fields in the Google Business Profile Manager:

1.  **Info > Phone:** Set to `918.280.8644`
2.  **Info > Business Status:** Ensure it is marked as **Open** (not Temporarily Closed).
3.  **Info > Address:** Clear any street address to switch to a Service Area Business (SAB).
4.  **Info > Service Area:** Set to "United States" (or specific regions).
5.  **Info > Services:** Add the custom services listed above under the primary category.

