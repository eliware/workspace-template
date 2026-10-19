# Workspace guide

Use this guide to create and maintain a private Eliware workspace from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Define the workspace

1. Create a private repository from this template.
2. Set the workspace role, purpose, and owner in the root README.
3. Set the package name, repository URL, keywords, and directive ID.
4. Keep project implementation in its owning repository.
5. Link to shared rules in their owning repositories.

## Add role guidance

State the role, decision boundary, and owner for each local process. Keep shared policy in its owning repository.

Use the specifications index for structured records. Use the runbook index for local procedures. Store each procedure in a separate `.yaml` file under `runbooks/`.

Set `schema-version` to `13`. Add a `title`, `purpose`, `owner`, and `boundaries` value. Add `prerequisites` and `steps` lists. Validate each file against the shared v13 runbook schema.

Write runbooks with ASD-STE100 rules. Use short sentences, active voice, and one instruction in each sentence.

## Work with others

Use Eliware Operations for cross-role communication and company-wide procedures. Use GitHub Issues for assignments, status, blockers, and required actions.

Keep workspace-specific recovery steps in local runbooks. Link to company-wide recovery guidance in its owning repository.

## Manage information

Keep credentials, secrets, decrypted data, private data, and runtime state out of Git. Keep the repository private.

## Validate

Install Node.js 26 or later and npm 12 or later. Run `npm ci`, then run `npm test`.
