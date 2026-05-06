# Data Classification for AllBots.com

## Purpose

Define how bot management, CRM, lead, workflow, and dashboard data should be handled.

## Public data

Examples:

- Public bot role examples.
- Public README files.
- Public Canva prompts without private information.
- Public website copy.
- Public social posts.

Handling:

- Safe to publish after review.
- Still review for accuracy, affiliate disclosure, and safe claims.

## Internal data

Examples:

- Draft bot system maps.
- Internal workflow notes.
- Non-sensitive campaign ideas.
- Performance summaries without private lead details.

Handling:

- Review before publishing.
- Keep private if it includes business-sensitive plans.

## Confidential data

Examples:

- Lead/customer names and contact details.
- CRM exports.
- Private business notes.
- Customer support notes.
- Bot intake responses connected to real people.

Handling:

- Do not commit to public GitHub.
- Store only in approved CRM or private systems.
- Limit access.
- Redact before using in examples.

## Restricted / high-risk data

Examples:

- Passwords.
- API keys.
- Bot platform tokens.
- CRM credentials.
- Private keys.
- `.env` files.
- Banking credentials.
- SSNs.
- Sensitive legal/tax documents.
- Database credentials.

Handling:

- Never commit to GitHub.
- Rotate immediately if exposed.
- Use secure secret storage.
- Do not ask users for this data through bots or forms.

## Bot role data minimization rules

Bots may ask for:

- Name.
- Contact method.
- Business/project name.
- General workflow need.
- Preferred next step.
- Which bot role is needed.

Bots should not ask for:

- Passwords.
- Banking credentials.
- SSNs.
- Private keys.
- Sensitive legal/tax documents.
- Full payment information.

## Example safe AllBots intake

```text
Which bot role do you need first?
1. Lead Bot
2. FAQ Bot
3. Sales Bot
4. Support Bot
5. Affiliate Bot
6. Follow-Up Bot
7. Training Bot
```

## Incident rule

If private or restricted data is exposed:

1. Remove exposure.
2. Rotate secrets if needed.
3. Document the issue.
4. Add prevention checklist.
5. Review bot role maps and forms.
