# AGENTS.md

## Project

See README.md for the workspace purpose, owner, and scope.

## Scope and boundaries

Keep requirements in their authoritative specifications.

## Layout

Use README.md and specs/README.md to find maintained files.

## Development

Check changes against workspace requirements.

## Validation

Use Node.js 26 or later and native ESM for maintained JavaScript modules.
Run npm test for aggregate validation.
Run npm run lint for lint checks.
Run npm run audit for dependency checks.
Run npm run format to format files.
Run npm run format:check to check formatting.

## Security

Keep credentials, secret values, private data, and runtime state out of Git.

## Changes

Update each index when you add a file.

## Workspace

Keep role guidance and local runbooks here. Keep application and database procedures in their owning repositories.

## Private distribution

The source repository is public. The package has `private: true`, so npm cannot publish it. No container publication workflow exists.
