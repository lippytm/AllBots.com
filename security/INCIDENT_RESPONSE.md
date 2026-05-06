# Incident Response for AllBots.com

## Purpose

Provide a response plan for bot management, CRM, lead data, workflow, dependency, and automation security issues.

## Incident examples

- Bot role map exposes private customer or lead information.
- Bot platform token or API key exposed.
- CRM export or lead list committed to GitHub.
- Customer support or bot transcript exposed.
- Dependency vulnerability found.
- GitHub Actions workflow fails insecurely.
- Public bot/automation claim creates compliance risk.
- Automation routes private data to the wrong place.

## Response process

### 1. Identify

Record:

- What happened?
- Which workflow/bot role/file/platform is affected?
- What data may be exposed?
- Is the issue low, medium, high, or critical?

### 2. Contain

- Remove exposed data.
- Disable risky bot role or workflow.
- Rotate affected token/key.
- Stop unsafe intake question.
- Restrict access if needed.
- Pause unsafe automation.

### 3. Fix

- Patch the workflow or prompt.
- Update dependency.
- Rewrite unsafe bot/system copy.
- Add human handoff.
- Update data handling docs.
- Add source tracking and CRM safeguards.

### 4. Recover

- Re-run security checks.
- Confirm bot roles no longer collect unsafe data.
- Confirm CRM/lead routing is safe.
- Confirm no secrets remain exposed.

### 5. Learn

- Add a prevention checklist.
- Update `SECURITY_CHECKLIST.md`.
- Create a security-risk issue if needed.
- Document what changed.

## Severity guide

### Low

Documentation or wording issue.

### Medium

Unsafe bot role definition, dependency alert, workflow misconfiguration.

### High

Exposed token/key, private lead data, CRM export, unsafe automation.

### Critical

Compromised account, active abuse, major data exposure, production credential compromise.

## Incident report template

```md
# AllBots.com Security Incident

Date found:
Affected workflow/bot role/file:
Severity:

## Summary

## Impact

## Containment

## Root cause

## Fix

## Prevention added
```

## Best practice

A bot management incident should improve the system. Fix the issue, then improve the role map, checklist, documentation, and automation guardrails so the problem is less likely to repeat.
