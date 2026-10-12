---
description: Add new specifications
---

# Purpose
Add a **new** specification to the `./SPECS/` folder and keep all supporting files up to date.

# Behavior

## 1. Determine what to add
- If `$ARGUMENTS` is empty or null, ask the USER what the new specification is about.
- If `$ARGUMENTS` is provided, analyze the codebase and the existing `./SPECS/` folder.

## 2. Validate the request
A specification is considered "properly defined" if it contains:
- A clear **goal** (what problem it solves)
- A defined **scope** (what is in and out of scope)
- At least one **acceptance criterion** (how to know it is done)
- A complete **Dependencies** list: every external package, library, tool, or internal step/spec the implementation relies on. If any dependency is needed, it MUST be listed here. Use "None" only when the step truly has no dependencies.

If `$ARGUMENTS` is vague, incomplete, or ambiguous, ask the user for more details before proceeding.

## 3. Ensure the `./SPECS/` structure exists
If the folder does not exist, create it and bootstrap the following file:
- `./SPECS/development-steps.md` — file registering all specifications as development steps

development-steps.md file must follow this structure:
```markdown
# Step <step number>
# Status: <'[TODO]' or '[DONE]'>
## <Feature Name>

- **Goal**: <one-sentence description>
- **Scope**: <what is included and excluded>
- **Acceptance Criteria**:
  1. <criterion>
  2. <criterion>
- **Related Files**: <paths to relevant code>
- **Dependencies**: <task numbers, spec names, package/library names, tools, or "None" — every dependency the implementation needs MUST be listed here>
- **Priority**: <High / Medium / Low>
- **Created**: <YYYY-MM-DD>
- **Notes**: <any additional context>
```

## 4. Transform the request to a proper developmeent Step

- Determine the Step number by incrementing the last documented step, if the file is empty, start with '1'
- Add the new step to the development-steps.md file

## 5. Execution Boundary
- **This command is DOCUMENTATION-ONLY.** You must NEVER implement code, modify source files, run builds, execute tests, or edit any file outside the `./SPECS/` folder.
- When the user approves a spec (e.g., "proceed", "yes", "ok"), it ONLY authorizes you to finalize the spec documents. It does NOT authorize implementation.
- Code implementation is ONLY permitted under the `implement-task` command.
- If you are unsure whether the user wants implementation, ask for clarification.

## 6. Rules
- You are STRICTLY FORBIDDEN from editing, creating, or modifying any file outside the `./SPECS/` folder.
- Never pick a random file name; use the domain-driven naming convention.
- Always update `implementation-tasks.md` when adding or modifying a spec.
- **You may create or modify spec files.**
- **Only add new tasks to `implementation-tasks.md`; do not modify existing tasks.**
- **Dependencies are binding:** every external package, library, tool, or internal step/spec required by the step MUST be captured in the `Dependencies` field before the spec is finalized. Do not leave this field blank or vague if a dependency exists.
