# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/workspace-template [![license](https://img.shields.io/github/license/eliware/workspace-template.svg)](LICENSE)[![build status](https://github.com/eliware/workspace-template/actions/workflows/nodejs.yml/badge.svg)](https://github.com/eliware/workspace-template/actions)

Documentation: [docs](docs/README.md) · [specifications](specs/README.md) · [examples](examples/README.md) · [release notes](RELEASE_NOTES.md)

A starter template for new Node.js projects. Use this as a foundation for your next application or service.

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Errors / Troubleshooting](#errors--troubleshooting)
- [Security](#security)
- [Customization](#customization)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

- Pre-configured for Node.js (ESM)
- Environment variable support via dotenv
- Logging and signal handling via `@eliware/common`
- Jest for testing
- MIT License

## Requirements

- Node.js 26 or newer
- A new project directory and environment appropriate to the application you build from this template

## Setup

1. **Clone this template:**

   ```bash
   git clone https://github.com/eliware/workspace-template.git
   cd workspace-template
   rm -rf .git
   git init
   npm install
   ```

2. **Update project details:**
   - Edit `package.json` (name, description, author, etc.)
   - Update this `README.md` as needed
   - Change the license if required

## Usage

Use this repository as a starting point: clone it, rename the package and
entrypoint, configure `.env`, and replace the starter implementation.

## Authority

Keep workspace-specific decisions and durable policy in indexed structured
records. Company-wide procedures remain owned by Operations.

## Runbooks

Store each workspace runbook as a separate indexed JSON record under `runbooks/`
and link it from `runbooks/README.md`.

## Communication

Document the authoritative communication channels, ownership, and escalation
boundaries for the workspace.

## Recovery

Document recovery ownership, checkpoints, and rollback boundaries without
claiming that a clean commit proves live-system health.

## Development

- Main entry: `workspace-template.mjs`
- Start your app:

  ```bash
  node workspace-template.mjs
  ```

- Add your code in new files and import as needed.

## Testing

- Run tests and coverage-gap checks with:

  ```bash
  npm test
  npm run test:gaps
  npm run lint
   npm run pack
  ```

- Add your tests in the `__tests__` folder or alongside your code.

## Template inheritance

Keep the template relationship when cloning specialized templates. Use `origin` for the new project and `upstream` for this template, then fetch and review upstream changes before merging.

## Customization

- Replace or extend the logging and signal handling as needed.
- Add dependencies and scripts to fit your project.
- Remove or modify template files and sections.

## Troubleshooting

This repository is a starter application, not a production service. Replace placeholder metadata and application logic after cloning. Keep `.env` local, verify configuration before startup, and use `registerSignals`/`registerHandlers` for explicit graceful shutdown and error handling.

## Security

Never commit `.env`, tokens, passwords, private keys, or credential-bearing URLs. Store secrets in the deployment environment or secret manager, and review dependencies and permissions before deploying a derived project.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[MIT © 2025 Eli Sterling, eliware.org](LICENSE)

## Links

- [Home Page](https://eliware.org)
- [GitHub Repo](https://github.com/eliware/workspace-template)
- [GitHub Org](https://github.com/eliware)
- [GitHub Personal](https://github.com/eli-sterling)
- [Discord](https://discord.gg/M6aTR9eTwN)
