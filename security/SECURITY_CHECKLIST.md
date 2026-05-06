# Security Checklist for AllBots.com

## Purpose

Use this checklist before changing bot role maps, CRM paths, lead capture workflows, GitHub Actions, dependencies, website copy, or future bot management dashboards.

## Core principle

Quality and Quality Assurance is Job #1. Bot management security is part of quality because multiple bots can touch leads, customers, website traffic, CRM records, support workflows, affiliate recommendations, and follow-up systems.

## Repository checklist

- [ ] `SECURITY.md` exists.
- [ ] Security checklist exists.
- [ ] Dependabot is configured.
- [ ] CodeQL or equivalent scanning is configured where useful.
- [ ] Dependency review runs on pull requests.
- [ ] No secrets are committed.
- [ ] No `.env` files are committed.
- [ ] No private lead/customer data is committed.
- [ ] No CRM exports are committed.
- [ ] No database dumps are committed.

## Bot management checklist

- [ ] Each bot role is clearly defined.
- [ ] Each bot collects only necessary information.
- [ ] Every bot has a next step.
- [ ] Human handoff exists where needed.
- [ ] Bot role maps do not include private customer data.
- [ ] Affiliate bot recommendations include disclosure where needed.
- [ ] Bot claims avoid guaranteed leads, sales, income, funding, or business outcomes.

## CRM and lead data checklist

- [ ] Lead source is tracked.
- [ ] CRM tag is assigned.
- [ ] Sensitive data is minimized.
- [ ] Contact records are stored in an appropriate system, not public GitHub.
- [ ] Private notes are not added to public docs.
- [ ] Retention/deletion process is documented when needed.

## GitHub Actions checklist

- [ ] Workflow permissions use least privilege.
- [ ] Pull request workflows do not expose secrets to untrusted code.
- [ ] Third-party actions are reviewed.
- [ ] Failed runs are categorized using the control-tower taxonomy.
- [ ] True vulnerabilities get a security-risk issue.

## Dependency checklist

- [ ] New dependencies are necessary.
- [ ] High/critical vulnerabilities are reviewed.
- [ ] Major upgrades are reviewed before merge.
- [ ] Unused dependencies are removed.

## Website and public copy checklist

- [ ] CTA is clear and safe.
- [ ] No guaranteed lead/sales/income claims.
- [ ] No unsupported cybersecurity claims.
- [ ] Affiliate disclosures are included where needed.
- [ ] Contact forms do not collect unnecessary sensitive data.

## Weekly security rhythm

- [ ] Review failed Actions runs.
- [ ] Review Dependabot alerts and PRs.
- [ ] Review CodeQL findings if applicable.
- [ ] Review bot role maps for unsafe data collection.
- [ ] Review CRM and lead handling notes.
- [ ] Update security docs when new risks are found.

## Best practice

AllBots.com should organize automation safely. Define roles, minimize data, include human handoff, document CRM routing, and track every risk before expanding automation.