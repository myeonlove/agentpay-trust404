# AgentPay

**Controlled financial autonomy for AI agents.**

AgentPay is a TRUST404 hackathon MVP that demonstrates how an AI agent can purchase a paid security-intelligence API while remaining constrained by verifiable identity and delegated spending permissions.

## Problem

AI agents can call APIs and hold wallets, but autonomous payment raises four questions:

1. Who is the agent?
2. Who authorized it?
3. What services and amounts are permitted?
4. How can it pay without exposing unlimited wallet authority?

## Solution

AgentPay combines:

- **DID** for agent identity
- **Verifiable delegation** for service, amount, budget, and expiry constraints
- **Agent wallet** for signing payments
- **x402** for HTTP-native API payments

The demo uses a security-agent scenario: an agent requests a contract risk report, receives an HTTP 402 response, verifies its credential and spending policy, pays 0.05 test USDC, and unlocks the report.

## Demo flow

```text
User delegation
      ↓
AI security agent requests risk analysis
      ↓
API returns HTTP 402 + price
      ↓
Agent verifies credential and spending limits
      ↓
x402 payment is signed
      ↓
Contract risk report is returned
```

## Run locally

No installation is required. Open `dist/index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000 --directory dist
```

Then visit `http://localhost:8000`.

## MVP scope

This repository is a submission-ready interactive prototype. The DID, credential verification, x402 response, test-USDC payment, and risk API output are simulated in the browser to demonstrate the complete user flow reliably. A production implementation would replace each simulated step with a DID/VC verifier, policy engine, funded agent wallet, x402-compatible API, and Base transaction confirmation.

## Technology

- HTML, CSS, and vanilla JavaScript
- DID / VC delegation model
- x402 payment flow
- Base Sepolia / test USDC target environment

## References

- [W3C DID Core](https://www.w3.org/TR/did-core/)
- [x402](https://www.x402.org/)
- [Coinbase Developer Platform](https://docs.cdp.coinbase.com/x402/docs/welcome)

## Team

Built for TRUST404 Web3 Security Hackathon, 2026.
