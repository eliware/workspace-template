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

This template organizes role guidance, local procedures, decisions, and recovery steps. Each derived workspace defines its role owners and decision boundaries.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Set its name, description, URLs, keywords, role owners, and decision boundaries.
Replace the sample guidance and procedures with approved content for the derived workspace.
Keep implementation and shared policy in their owning repositories.
Run `npm ci` from the repository root.

## Usage

Read the [workspace guide](docs/README.md) before you adapt the template.
Use the [runbook index](runbooks/README.md) to find the sample procedures.

## Development

Read [AGENTS.md](AGENTS.md) before you change files.
Use [the specifications index](specs/README.md) to find structured requirements.
Keep each document and procedure in its owning repository. Link to shared requirements. Do not copy their content.

## Testing

Run `npm test` before handoff. It runs aggregate repository checks through `eliware-test`.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.
Run `npm run format:check` to check formatting.
Run `npm run format` to format repository files.

## Troubleshooting

If `npm ci` fails, use Node.js 26 or later and npm 12 or later.
If `npm test` fails, read the reported file and rule.
Fix the source document.
Run `npm test` again.

## Security

Keep credentials, secrets, private data, and runtime state out of Git. Use an approved secret store for each secret value.
The template repository is public. `package.json` sets `private` to `true`, so npm publication is disabled.
The template has no container publication workflow. Set source visibility and publication options for each derived repository.

## Runbooks

Store each local procedure in a separate `.yaml` file under `runbooks/`.
List each procedure in [the runbook index](runbooks/README.md).
Use [the workspace guide](docs/README.md) for the shared schema and adaptation steps.

The sample runbooks are incomplete examples.
Replace every placeholder in a sample runbook.
Ask its owner to confirm the completed procedure.
Use the procedure only after the owner confirms it.

## Communication

Use [Eliware Operations](https://github.com/eliware/operations) for cross-role release decisions and company-wide procedures.
Use GitHub Issues to name work owners and record status, blockers, and required actions.

## Recovery

Keep workspace-specific recovery steps in local runbooks.
Follow the approved recovery procedure for the affected role.
Use [Eliware Operations](https://github.com/eliware/operations) for cross-role recovery guidance.

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
