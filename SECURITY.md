# Security Policy

## Mission

Quality and Quality Assurance is Job #1. Security is a foundation of quality, transparency, documentation, database management, bot management, CRM routing, automation, and trust.

## Scope

This repository is part of the lippytm.ai Business of Businesses ecosystem and focuses on organizing bots by role, workflow, business outcome, CRM tag, and follow-up path.

Security review applies to:

- Bot role maps.
- CRM and lead routing plans.
- Website copy and intake forms.
- Automation workflow concepts.
- GitHub Actions and dependencies.
- Any future dashboards, databases, APIs, or deployments.

## High-risk items

Treat these as high risk:

- API keys, tokens, passwords, private keys, `.env` files.
- Private lead/customer data or CRM exports.
- Bot systems collecting unnecessary sensitive information.
- Database, authentication, payment, or deployment workflows.
- Automated actions that message, publish, deploy, or change external systems.

## Bot management security rules

- Define bot roles before building tools.
- Collect the minimum data necessary.
- Add human handoff where needed.
- Do not store private lead/customer data in public GitHub repos.
- Do not ask for passwords, banking credentials, SSNs, private keys, or sensitive legal/tax documents.
- Avoid guaranteed lead, sales, income, or business outcome claims.
- Disclose affiliate/tool recommendations where needed.

## Reporting a security issue

Do not post secrets, private lead/customer data, or exploit details in public issues. Use a private report path where available, or create a general security-risk issue without exposing sensitive details.

## Incident response

If sensitive information is exposed:

1. Remove the exposure.
2. Rotate affected secrets if needed.
3. Review bot/CRM/data handling notes.
4. Patch the root cause.
5. Document prevention steps.
6. Improve automation/checklists.
