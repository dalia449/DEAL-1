# DEAL Final Platform

## What this project is
A frontend-first, deployable DEAL engineering workflow with real browser camera permissions, interactive drawing, report generation/printing, role-gated admin UI, email verification hooks, and marketing-consent UI.

## IMPORTANT: real auth/email
To make authentication and email verification real across devices, configure Supabase:
1. Create a Supabase project.
2. Enable Email/Password auth and email confirmations.
3. Put the project URL and anon key in `.env`.
4. Use Supabase Auth metadata `full_name` and `marketing_consent`.
5. For production admin authorization, create a server-side profile/role policy with the owner email `dd3.99d@gmail.com`; do not trust a client role.
6. For real marketing email, connect Resend/SMTP on a server-side function. Never expose a Resend/SMTP secret in Vite client code.

## Environment
Copy `.env.example` to `.env`:
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_RESEND_FROM=
VITE_APP_URL=

## Run
npm install
npm run dev

## Build
npm run build

## Deploy
Vercel detects Vite automatically. Set the VITE_* environment variables in Vercel.

## Camera
Camera is never requested on page load. Permission is requested only after the user deliberately starts Scan Land, Scan Paper Drawing, Hand Tracking, or Furniture Capture. Stop releases MediaStream tracks.

## Reporting
Generate Report creates the report state; Print / Save PDF uses the browser print dialog; Export downloads a self-contained HTML report.

## Security note
The included UI demonstrates owner-gated controls. For a production submission, enforce the owner role in Supabase RLS/server-side functions. Client-side email comparison is not a security boundary.
