# DCEX — Solana Wallet for India
Create a wallet with Google login, view balances in USD, send/receive, and swap SOL ↔ USDC/USDT. Built with Turborepo + Next.js.
<img width="1470" height="956" alt="Screenshot 2025-08-23 at 4 14 34 PM" src="https://github.com/user-attachments/assets/a63a818f-bca2-462e-9fb2-ecb0b4c97195" />
<img width="1470" height="903" alt="Screenshot 2025-08-23 at 4 14 42 PM" src="https://github.com/user-attachments/assets/57ee0910-7721-4cde-bf25-3e392510f45f" />
<img width="1470" height="777" alt="Screenshot 2025-08-23 at 4 14 54 PM" src="https://github.com/user-attachments/assets/0d3fb953-91a6-4791-b7b7-871d0d4478a0" />



Features
Google OAuth onboarding

SOL, USDC, USDT balances in USD

Send/Receive tokens

Token swap with live quotes

INR on/off‑ramp entry points (Add funds, Withdraw)

Tech
Next.js, React, TypeScript, Tailwind

Solana Web3 + SPL

Monorepo via Turborepo

ESLint, Prettier, pnpm

Quick start
git clone https://github.com/MohitG780/Trxapp.git

pnpm install

Create apps/web/.env.local:

NEXT_PUBLIC_SOLANA_RPC=

NEXT_PUBLIC_SOLANA_CLUSTER=devnet|mainnet-beta

GOOGLE_CLIENT_ID=, GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=

pnpm dev (web at http://localhost:3000)

Scripts
pnpm dev — run apps

pnpm build — build all

pnpm lint / pnpm format

Roadmap
INR ramp integration

Tx history, address book

Advanced swap (slippage, fees)
