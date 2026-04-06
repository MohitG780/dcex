# DCEX — Solana Wallet for India
Create a wallet with Google login, view balances in USD, send/receive, and swap SOL ↔ USDC/USDT. Built with Turborepo + Next.js.


<img width="1071" height="586" alt="Screenshot 2026-04-06 at 7 09 00 PM" src="https://github.com/user-attachments/assets/77c0f3dd-c3ab-428c-85f9-24a0854c8743" />
<img width="1142" height="587" alt="Screenshot 2026-04-06 at 7 09 08 PM" src="https://github.com/user-attachments/assets/7b713e90-6faf-4c17-b393-4e4d3a117274" />
<img width="1219" height="608" alt="Screenshot 2026-04-06 at 7 09 16 PM" src="https://github.com/user-attachments/assets/d61a0854-865a-4490-9b16-7a3886b0346d" />




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
