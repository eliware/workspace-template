# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/workspace-template [![License](https://img.shields.io/github/license/eliware/workspace-template)](https://github.com/eliware/workspace-template/blob/main/LICENSE) [![CI](https://github.com/eliware/workspace-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/workspace-template/actions/workflows/ci.yaml)

An Eliware workspace template for indexed role guidance, ownership, communication, and recovery.

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
- [Links](#links)
- [License](#license)

## Features

This template provides a reusable starting point. Each derived repository owns its product behavior and operating decisions.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Replace the template name, description, URLs, keywords, and sample content.
Run `npm ci` from the repository root.

## Usage

Follow this README and the [user guide](docs/README.md).

## Development

Read [AGENTS.md](AGENTS.md) and [the specifications index](specs/README.md) before you change files.
Keep documents and records in the repository that owns them.

## Testing

Run `npm test` before handoff. It runs the repository checks through `eliware-test`.

## Troubleshooting

Install the required Node.js and npm versions. Run `npm ci` after dependency changes.
Review the file and rule in any validation error.

## Security

Keep credentials, secrets, private data, and runtime state out of Git.
Use only approved secret stores for secret values.

## Runbooks

Use [the runbook index](runbooks/README.md) to find local procedures.
Store each procedure in a separate `.yaml` file under `runbooks/`. Validate each file against the shared v12 schema. Write runbook steps with ASD-STE100 rules.

## Communication

Use [Eliware Operations](https://github.com/eliware/operations) for cross-role communication and company-wide procedures.
Use [Eliware Tasklist](https://github.com/eliware/tasklist) for company-wide assignments and status.

## Recovery

Keep workspace-specific recovery steps in local runbooks.
Use Eliware Operations for cross-role recovery. Use Eliware Tasklist for blockers and next actions.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/workspace-template)
- [Bug Reports](https://github.com/eliware/workspace-template/issues)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
