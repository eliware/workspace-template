# Release Notes

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
