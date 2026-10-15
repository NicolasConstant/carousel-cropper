# Step 1
# Status: [DONE]
## Initialize Angular Project

- **Goal**: Initialize a new Angular project named "Carousel Cropper" using the latest stable Angular version compatible with Node 26.7.0. The template used MUST be SCSS instead of CSS. The project MUST be stored at the root folder of this reporitory.
- **Scope**: 
  - In scope: installing or updating the Angular CLI globally, creating the Angular workspace with the project name "Carousel Cropper", ensuring the generated project builds and serves without errors.
  - Out of scope: implementing carousel or image-cropping features, custom styling, and additional tests beyond what the Angular CLI generates by default.
- **Acceptance Criteria**:
  1. An Angular project named "Carousel Cropper" is created in the repository.
  2. The project uses the latest stable Angular version that supports Node 26.7.0.
  3. `ng build` completes successfully with no errors.
  4. `ng serve` starts the development server without errors.
  5. SCSS is used in the project
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

# Step 3
# Status: [DONE]
## Image Selection and Crop to 1080x1350

- **Goal**: Allow users to select an image from their device, reposition it within a fixed 1080x1350 crop frame, and download the resulting cropped image.
- **Scope**: 
  - In scope: file input on the main page, extension validation, displaying the selected image in a crop frame, drag-to-reposition the image within the 1080x1350 frame, generating the cropped output, and triggering a browser download prompt.
  - Out of scope: server upload or storage, editing beyond repositioning, multiple image support, advanced filters or transformations, and social-media carousel export.
- **Acceptance Criteria**:
  1. The main page provides a file input that accepts common image formats (e.g., `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.bmp`).
  2. Selecting a file with a non-image or unsupported extension shows a clear validation error to the user.
  3. The selected image is displayed inside a visible crop frame sized to a 1080x1350 aspect ratio.
  4. The user can drag/pan the image within the crop frame to choose the visible portion.
  5. The cropped output is rendered at exactly 1080x1350 pixels and matches the region currently visible inside the crop frame.
  6. After cropping, the browser prompts the user to download the resulting image file.
- **Related Files**: `src/app/app.html`, `src/app/app.ts`, `src/app/app.scss`
- **Internal dependencies**: Step 1 (Initialize Angular Project)
- **External dependencies**: Angular framework, HTML5 File API, HTML5 Canvas API
- **Notes**: The exact list of accepted extensions and output format/quality should be finalized before implementation. This step defines the first user-facing feature of the Carousel Cropper app.
