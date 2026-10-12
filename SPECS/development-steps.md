# Step 1
# Status: [DONE]
## Initialize Angular Project

- **Goal**: Initialize a new Angular project named "Carousel Cropper" using the latest stable Angular version compatible with Node 26.7.0. The template used MUST be SASS instead of CSS. The project MUST be stored at the root folder of this reporitory.
- **Scope**: 
  - In scope: installing or updating the Angular CLI globally, creating the Angular workspace with the project name "Carousel Cropper", ensuring the generated project builds and serves without errors.
  - Out of scope: implementing carousel or image-cropping features, custom styling, and additional tests beyond what the Angular CLI generates by default.
- **Acceptance Criteria**:
  1. An Angular project named "Carousel Cropper" is created in the repository.
  2. The project uses the latest stable Angular version that supports Node 26.7.0.
  3. `ng build` completes successfully with no errors.
  4. `ng serve` starts the development server without errors.
  5. SASS is used in the project
  6. The project is stored at the root folder, the angular files `angular.json`, `package.json`, etc, are next to current `LICENSE` file.
- **Related Files**: `angular.json`, `package.json`, `tsconfig.json`, `src/`
- **Internal dependencies**: None
- **External dependencies**: Node.js 26.7.0, npm, Angular CLI, Angular framework
- **Notes**: This is the foundational step for the Carousel Cropper application. The exact Angular version should be selected based on Angular's published compatibility matrix for Node 26.7.0 at the time of implementation.

# Step 2
# Status: [DONE]
## Initialize AGENTS.md with opencode /init

- **Goal**: Run the opencode `/init` command in the project root to generate an `AGENTS.md` file that captures project-specific guidance, conventions, and context for future coding agents working on Carousel Cropper.
- **Scope**: 
  - In scope: executing opencode `/init`, reviewing the generated `AGENTS.md` content, ensuring the file is placed at the repository root and accurately reflects the Angular project setup.
  - Out of scope: implementing any application features, modifying source code, running builds or tests, or making non-documentation changes.
- **Acceptance Criteria**:
  1. The opencode `/init` command is executed successfully in the project root.
  2. An `AGENTS.md` file is created at the repository root (`./AGENTS.md`).
  3. The generated `AGENTS.md` contains relevant project guidance for future agents (e.g., project type, tech stack, build/test commands, conventions).
  4. The content of `AGENTS.md` is appropriate for the Carousel Cropper Angular project.
- **Related Files**: `AGENTS.md`, `README.md`, `package.json`, `angular.json`
- **Internal dependencies**: Step 1 (Initialize Angular Project)
- **External dependencies**: opencode CLI/tool with the `/init` command
- **Notes**: This step documents agent-specific context. After completion, future agent tasks can reference `AGENTS.md` for project conventions. This step must not modify any application source files.
