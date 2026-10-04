# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

@eliware/workspace-template [![License](https://img.shields.io/github/license/eliware/workspace-template)](https://github.com/eliware/workspace-template/blob/main/LICENSE) [![CI](https://github.com/eliware/workspace-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/workspace-template/actions/workflows/ci.yaml)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Runbooks](#runbooks)
- [Communication](#communication)
- [Recovery](#recovery)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

This template owns reusable workspace structure and guidance; each derived workspace owns its role decisions and company-wide procedures.

Package description: An Eliware workspace template for indexed role guidance, ownership, communication, and recovery. Author: Eliware <eliware@eliware.org>. License: MIT.

A baseline for private Eliware workspaces with indexed role guidance, structured
directives, local runbooks, and shared validation.

A derived workspace defines its role and ownership boundaries. Project
implementation and cross-cutting procedures stay in their owning repositories.

## Requirements

Node.js 26 and npm 12 or later are required for repository validation. This template defines no
application runtime commands, environment variables, or runtime configuration.
The `package.json` scripts are repository validation commands.

## Setup

Create a repository from this template, then replace template metadata and
content with the derived workspace's role, purpose, and ownership boundaries.
Run `npm ci` from the repository root before validation.

## Usage

Start with this README, then follow [directives](specs/directives.yaml), the
[specifications index](specs/README.md), and the
[runbook index](runbooks/README.md). Keep workspace-owned guidance here and link
to shared policy and company-wide procedures in their owning repositories.

Documentation: [specifications](specs/README.md)

## Development

Read [AGENTS.md](AGENTS.md), this README, and applicable specifications before
changing files. Keep the root README and indexes aligned with the maintained
records. Replace the template's package name, repository URL, description,
keywords, and directive ID when creating a derived workspace.

## Testing

Run `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`,
`npm run format`, or `npm run format:check` for focused stages. The scripts run
through `eliware-test`.

## Troubleshooting

Use Node.js 26 and npm 12 or later and run `npm ci` after dependency changes. Review the rule and
file path reported by `eliware-test` when validation fails.

## Security

Keep credentials, secrets, decrypted data, runtime output, and machine-specific
state outside version control. Workspace repositories are private and must not
contain plaintext secrets.

## Runbooks

The [runbook index](runbooks/README.md) lists local workspace procedures and
defines their navigation boundary. Store each procedure in a separate JSON
record with an ID, purpose, owner, boundaries, and steps. Use
[Eliware Operations](https://github.com/eliware/operations) for company-wide
procedures.

## Communication

Use [Eliware Operations](https://github.com/eliware/operations) for cross-role
communication routing and [Eliware Tasklist](https://github.com/eliware/tasklist)
for company-wide assignments and status. Replace these links only when the
owning repositories change.

## Recovery

Document workspace-specific recovery procedures in the local runbook index.
Cross-role recovery coordination belongs to
[Eliware Operations](https://github.com/eliware/operations); track company-wide
blockers and next actions in [Eliware Tasklist](https://github.com/eliware/tasklist).

## Support

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

Use the [Eliware Discord community](https://discord.gg/M6aTR9eTwN),
[GitHub issues](https://github.com/eliware/workspace-template/issues), or
eliware@eliware.org. Include the relevant directive or runbook and a concise
description of the issue when requesting help.

## License

[license](LICENSE)

## Links

- [Home Page](https://github.com/eliware/workspace-template#readme)
- [GitHub repository](https://github.com/eliware/workspace-template.git)
- [Eliware](https://eliware.org)
- [GitHub organization](https://github.com/eliware)
- [Discord](https://discord.gg/M6aTR9eTwN)
- [Canonical repository profile specifications](https://github.com/eliware/test/blob/main/specs/conventions/README.md)
- [specifications](specs/README.md)
- [Directives](specs/directives.yaml)
- [Runbooks](runbooks/README.md)
- [Eliware Tasklist](https://github.com/eliware/tasklist)
