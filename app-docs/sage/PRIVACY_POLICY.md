# Privacy Policy

Sage — last updated 23 July 2026

Sage is a note-taking app. This policy describes what it stores, where that data goes, and what we can and cannot see.

**Your notes are encrypted on your device.** Note titles and bodies are encrypted with AES-256-GCM before they leave your device. The encryption key is held in your own account storage and is never sent to our servers, so we cannot read your notes. The one exception is described under "AI features" below.

## What we store

- **Account** — the email address from your Apple or Google sign-in, and your display name and avatar when the provider supplies them. Authentication is handled by Supabase; we never see or store a password.
- **Notes and workspaces** — stored as ciphertext. Structural data (which workspace a note belongs to, timestamps, tags, whether it is pinned) is stored unencrypted so the app can list and order your notes.
- **Images and files** — attachments you add to notes are stored on Cloudflare R2.
- **Subscription status** — whether your account is on the free or Pro plan, and when the current period ends.

## AI features

When you invoke an AI action — summarizing, translating, asking your notes, generating a title or an image — the text needed for that action is decrypted on your device and sent to the AI provider that serves the request: Google (Gemini) or OpenAI. This is the only situation in which note content leaves your device in readable form, and it happens only when you ask for it. Providers process the request to return a result; the content is not used to train their models under the API terms we operate under.

## Links you save

When you share a link into Sage, our server fetches that page to produce a title for the note. It requests only the page you shared.

## What we do not do

- No advertising, and no sale or sharing of personal data with data brokers.
- No third-party analytics or tracking SDKs.
- No reading of your note content — it reaches our servers already encrypted.

## Payments

Subscriptions are purchased through Apple. Apple processes the payment; we never receive your card details. RevenueCat tells our server whether your subscription is active so the app can unlock Pro features.

## Deleting your account

Settings → Delete account removes your profile, workspaces, notes and sign-in identity. Deletion is immediate and cannot be undone.

## Children

Sage is not directed at children under 13, and we do not knowingly collect their data.

## Changes

If this policy changes materially, the date at the top changes with it.

## Contact

[memetsagire@gmail.com](mailto:memetsagire@gmail.com)
