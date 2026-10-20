# Workspace Guide

Use this guide to create and maintain a private workspace repository from this template.

> After you create a repository from this template, replace this guide with end-user documentation for that repository.

## Purpose and ownership

A workspace repository stores role-specific guidance, decisions, and local procedures. It does not own application code or company-wide policy.

Keep each requirement and procedure with its owner. Link to shared guidance. Do not copy its content.
Keep application commands and checks in an application-owned runbook. Keep database migration steps in a DBA-owned runbook.
Use your organization's approved communication channel for cross-role release decisions and company-wide procedures.

## Create a workspace repository

1. Create a private repository from this template.
2. Set the repository name, description, URLs, and keywords in `package.json`.
3. Keep `private` set to `true`. This value prevents npm publication.
4. Update the root README with the workspace purpose, role, owner, and decision boundaries.
5. Replace this guide with documentation for the derived repository.
6. Replace or remove each sample runbook before you use it.
7. Keep secrets, private data, decrypted data, and runtime state out of Git.

The repository contains these maintained areas:

| Path           | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| `README.md`    | Introduces the workspace and its ownership boundaries.                |
| `AGENTS.md`    | Gives repository-level instructions to maintainers and coding agents. |
| `docs/`        | Contains end-user documentation for the workspace.                    |
| `specs/`       | Contains structured requirements and its index.                       |
| `runbooks/`    | Contains local procedures and the runbook index.                      |
| `package.json` | Defines the private package metadata and validation commands.         |

## Define roles and boundaries

Name the owner for each local process. State which decisions each role can make.
Name the owner for every other decision.
Name the required inputs, expected results, and escalation contact for each procedure.

Keep shared policy in its owning repository. Link to the source document and identify the owning team or role.
Use GitHub Issues to name work owners and record status, blockers, and required actions.

## Write and maintain runbooks

Use [the runbook index](../runbooks/README.md) to find the sample procedures. Store each local procedure in a separate `.yaml` file under `runbooks/`.
Add every runbook to `runbooks/README.md`. Give each entry a title that names its task.

Use the [shared v14 runbook schema](https://github.com/eliware/test/blob/main/specs/runbook-schema.yaml). Each runbook must contain these fields:

- `schema-version`: the number `14`.
- `title`: a non-empty string that names the procedure.
- `purpose`: a non-empty string that states the intended result.
- `owner`: a non-empty string that names the accountable owner.
- `boundaries`: a non-empty string that defines what the procedure owns and excludes.
- `prerequisites`: a list of non-empty strings that name required approvals, inputs, access, and contacts.
- `steps`: a list of one or more non-empty strings that gives the procedure.

Do not add fields that the shared schema does not define. Write each step as an instruction. Put its condition before its action.
Use short sentences and active voice. Ask the named owner to supply each required command, target, check, and recovery option.

Keep placeholders until the named owner supplies each value. A sample runbook does not authorize deployment.

The template includes `deploy-component.yaml` and `application-schema-migration.yaml` as incomplete examples.
Do not use them as procedures.
Replace every bracketed placeholder. Ask each named owner to check and confirm the completed procedure.
Use a sample only after you remove all placeholders and each owner confirms the procedure.

Keep application deployment steps in an application-owned procedure. Keep database migration steps in a DBA-owned procedure.

## Coordination and recovery

Use your organization's approved communication channel for cross-role communication and company-wide procedures.
Use GitHub Issues to name work owners and record status, blockers, and required actions.
Keep workspace-specific recovery steps in local runbooks. Follow the cross-role recovery procedure that your organization approves.
Do not select a recovery or forward-fix option unless the responsible owner directs you to a documented procedure.

## Validate changes

Use Node.js 26 or later and npm 12 or later.
Run `npm ci` from the repository root to install the locked dependencies.
Run `npm test` to check the repository through `eliware-test`.

Run `npm run lint` for lint checks.
Run `npm run format:check` to check formatting.
Run `npm run format` to format files.
Run `npm run audit` for dependency checks.

The CI workflow runs `npm ci` and `npm test` on pushes and pull requests to `main`.

If installation fails, install the required Node.js and npm versions.
If validation fails, read the reported file and rule.
Correct the source document. Run `npm test` again.

## Workspace information

Keep the repository private. Keep credentials, secrets, decrypted data, private information, and machine-specific state out of Git.
Use an approved secret store for secret values. Do not put secret values in runbooks, examples, issues, or logs.
