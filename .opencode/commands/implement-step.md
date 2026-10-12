---
description: Implement the specified development step
---

# Purpose
Implement a `[TODO]` step from `./SPECS/implementation-tasks.md` and update its status.

# Behavior

## 1. Determine which task to implement
- Read `./SPECS/development-steps.md`
- Find a step named `# Step $ARGUMENTS`
- Verify there is a matching `[TODO]` task. If not, report to the user and wait for instructions.
- Display the selected task to the user and ask for confirmation.

## 2. Read the specification
Before writing any code, read the related step content.
You MUST NOT modify specification files.

## 3. Implement the task
- Follow the project's existing coding style and conventions.
- Make the minimal changes necessary to satisfy the acceptance criteria.
- Before installing or using any external package, library, tool, or internal module, verify it is explicitly listed in the step's **Internal dependencies** or **External dependencies** field.
- Only dependencies that are explicitly listed in the spec may be installed or used. If the implementation needs an internal or external dependency that is not listed, STOP and ask the user to update the spec first; do not add or use it without approval.
- Run any existing tests after making changes. If tests fail, fix them.

## 4. Verify
- Confirm the implementation matches the acceptance criteria in the specification.
- If the project has a build step, run it to ensure no compilation errors.

## 5. Update the tracker
Once the task is fully implemented and verified, change its status in `./SPECS/development-steps.md` from `[TODO]` to `[DONE]`.

## 6. Rules
- Do not modify files outside the scope of the task.
- Do not modify specification files; they are read-only during implementation (unless being in the case #7).
- If a spec file is missing or unclear, stop and ask the user — do not guess.
- Only install and use dependencies that are explicitly listed in the step's `Internal dependencies` or `External dependencies` fields. Unlisted dependencies MUST NOT be introduced.
- Always update `development-steps.md` after completing a task.

## 7. After implementation corrections
After implementing the specs, in the case the user request modification / correction of the implementation:
- Implement the modification / correction
- ALWAYS update the related SPECS according to the new modification / correction