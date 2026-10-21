# Release Notes

## 15.0.0 — 2026-10-21

### Changed

- Set the package version to 15.0.0 and the workspace directive version to 15.0.
- Upgrade `@eliware/test` to v15 and refresh transitive dependency versions.
- Update the workspace guide and sample runbooks to the shared v15 runbook schema.

## 14.0.0 — 2026-10-20

### Added

- Describe the sample runbooks, observable results, and links to the procedures that workspace runbooks require.

### Changed

- Set the package version to 14.0.0 and update the matching lockfile metadata.
- Update `@eliware/test` to 14.0.0 and refresh its locked dependencies.
- Align the workspace specification and sample runbooks with the v14 conventions and runbook schema.
- Move the workspace guide to `docs/workspace-guide.md` and use `docs/README.md` as its index.
- Link the release notes from README Usage and remove the unrelated source-module rule from AGENTS.md.
- Remove repeated validation and ownership instructions from README.md and redundant repository-boundary guidance from AGENTS.md.

## 13.0.0 — 2026-10-19

### Added

- Add a runbook for deploying an application component.
- Add a runbook for application deployment after a database schema migration.
- Add a workspace guide for setup, role boundaries, runbooks, communication, recovery, and validation.

### Changed

- Set the package version and directives to 13.0, and upgrade `@eliware/test` to v13.
- Align package metadata, README.md, AGENTS.md, and documentation with v13 workspace conventions.
- Use the shared v13 runbook schema for local procedures.
- Mark sample runbooks as incomplete and require owners to confirm their values before use.
- Record the database migration result and verification status in the release issue.
- Use checkout v7 and fetch the full Git history in the CI workflow.
- Update the Knit deployment workflow to run `git pull` before dependency installation and validation.
- Refresh the package lock with current dependency versions.
- Document the public source repository, disabled npm publication, and derived repository visibility choices.
- Replace private Operations links with public guidance for communication and recovery.
- Replace the private Operations reference in the workspace guide with public communication guidance.
- Replace private Operations references in the directives and sample runbook with public guidance and a template placeholder.
- Replace the private DBA runbook URL with a placeholder for the approved runbook.
