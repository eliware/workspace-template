# AGENTS.md

## Project

Repository: `eliware/workspace-template`. Purpose: provide a baseline for private Eliware workspaces.

## Scope and boundaries

This `AGENTS.md` applies repository-wide; a nearer `AGENTS.md` provides instructions for its subdirectories. This repository's scope is the reusable workspace structure, documentation, and configuration. It does not own the derived workspace's role decisions or company-wide procedures. Read `README.md`, `AGENTS.md`, and applicable documentation before changing files. Project-specific rules may add requirements but must not weaken shared rules unless authorized.

## Layout

The required workspace structure includes the root `README.md`, `AGENTS.md`, `specs/directives.yaml`, `specs/README.md`, `runbooks/README.md`, `package.json`, `.github/workflows/ci.yml`, and `.knit/deploy.yaml`. Add a separate JSON file under `runbooks/` for each local procedure and index it in `runbooks/README.md`. Do not impose application or library source and test files on this workspace template.

## Development

These instructions apply repository-wide; a nearer `AGENTS.md` applies in its subdirectory. Read `README.md`, `AGENTS.md`, and applicable documentation before changing files. Keep each maintained module to a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators, including coordinators of coordinators, are valid when each module has one distinct responsibility. Add each distinct new responsibility as a focused submodule with a mirrored test and wire it through its owner; do not add the new responsibility to an existing module. During ordinary review, refactor them when you find mixed responsibilities. The 100 source-line and 200 test-line maxima are separate blocking limits; passing them does not prove single responsibility or permit mixed responsibilities below those maxima. Keep indexes aligned with maintained files.

Before changing files, read README.md, applicable AGENTS.md instructions, and applicable documentation.

## Validation

Use Node.js 26 and npm. This template has no application runtime commands, environment variables, or runtime configuration; `eliware-test` arguments are CLI options, not runtime settings. The shared validation CLI uses native ESM `.mjs` modules; this template has no local validation implementation. Run `npm ci` after dependency changes and `npm test` for aggregate validation. Use `npm run lint`, `npm run format:check`, and `npm run audit` for focused stages; `npm run format` writes formatted files. Run `git diff --check` before handoff. CI runs `npm ci` followed by `npm test` on Ubuntu.

Use Node.js 26 and npm 12 or later for repository validation.

## Security

Keep credentials, secrets, decrypted data, runtime output, and machine-specific state outside version control.

## Changes

Keep instructions actionable, current, and concise. Record intentional deviations from shared conventions with their reason, approver, and expiry. Preserve workspace ownership boundaries. Do not publish, release, deploy, or modify external systems without explicit authorization.

## Workspace

Replace this section with the derived workspace's purpose, role boundary, communication channels, local runbooks, recovery ownership, and validation. Use Eliware Operations for company-wide procedures and communication routing; use Eliware Tasklist for company-wide assignments and status. Keep local procedures in indexed JSON records under `runbooks/`. Do not leave role boundaries or recovery ownership undefined.

## Private distribution

This template and derived workspace repositories must remain private and set `package.json` to `private: true`. Do not publish them as npm packages. Exclude credentials, runtime state, and machine-specific files from version control.

Limit repository access to authorized Eliware collaborators.
