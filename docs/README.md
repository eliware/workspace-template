# Workspace guide

Use this guide to create and maintain a private Eliware workspace from this template.

## Define the workspace

1. Create a private repository from this template.
2. Set the workspace role, purpose, and owner in the root README.
3. Set the package name, repository URL, keywords, and directive ID.
4. Keep project implementation in its owning repository.
5. Link to shared rules in their owning repositories.

## Add role guidance

State the role, decision boundary, and owner for each local process. Keep shared policy in its owning repository.

Use the specifications index for structured records. Use the runbook index for local procedures. Store each procedure as a separate JSON record with an ID, purpose, owner, boundaries, and steps.

Write runbooks with ASD-STE100 rules. Use short sentences, active voice, and one instruction per sentence.

## Coordinate and recover

Use Eliware Operations for cross-role communication and company-wide procedures. Use GitHub Issues for assignments, status, blockers, and next actions.

Keep workspace-specific recovery steps in local runbooks. Link to company-wide recovery guidance in its owning repository.

## Protect information

Keep credentials, secrets, decrypted data, private data, and runtime state out of Git. Keep the repository private.

## Validate

Install Node.js 26 or later and npm 12 or later. Run `npm ci`, then run `npm test`.
