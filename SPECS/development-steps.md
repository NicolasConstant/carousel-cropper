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

# Step 4
# Status: [DONE]
## Design the Website Using Cobalt as Inspiration

- **Goal**: Redesign the Carousel Cropper web application interface and landing experience using https://joincobalt.com as visual inspiration, creating a modern, clean, conversion-focused design with a cohesive typography, color palette, spacing, and component system.
- **Scope**:
  - In scope: defining a visual design system (colors, typography, spacing, border radius, shadows), creating a landing-page-style hero section with a headline, subheadline, and primary call-to-action, designing a header/navigation and footer, adding feature-highlight sections, applying the design system to the existing image crop tool UI (file input, crop frame, download button), and ensuring the layout is responsive across desktop and mobile viewports.
  - Out of scope: implementing new functional features beyond the existing crop behavior, backend/server functionality, multi-page routing, complex animation libraries, and creating original brand/logo assets (placeholders are acceptable).
- **Acceptance Criteria**:
  1. A design system is documented in `SPECS/` defining colors, typography, spacing, and reusable component patterns inspired by Cobalt.
  2. The existing landing/app page is visually redesigned to include a hero section, feature highlights, and a clear primary CTA.
  3. The existing image crop tool UI (file input, crop frame, download button) is restyled using the new design system.
  4. The layout is responsive and renders correctly on both desktop and mobile viewports.
  5. All styling uses SCSS, following the project conventions.
  6. The design remains consistent across all visible elements.
- **Related Files**: `src/app/app.html`, `src/app/app.scss`, `src/app/app.ts`, `src/styles.scss`, `public/`
- **Internal dependencies**: Step 1 (Initialize Angular Project), Step 3 (Image Selection and Crop to 1080x1350)
- **External dependencies**: Angular framework, SCSS, design reference https://joincobalt.com
- **Notes**: The Cobalt website features a clean, modern fintech aesthetic with bold headlines, ample whitespace, rounded UI elements, card-based feature sections, and clear CTAs. The Carousel Cropper design should adapt these patterns to an image-cropping tool context.

# Step 5
# Status: [DONE]
## Enforce SCSS BEM Nesting Convention

- **Goal**: Refactor the project's SCSS so BEM-style modifiers and elements are nested inside their base block using the parent selector (e.g., `.button { &--primary { ... } }` and `.header { &__inner { ... } }`), nesting as much as possible while preserving computed styles.
- **Scope**:
  - In scope: all `.scss` files in the project (`src/styles.scss`, `src/app/app.scss`, and any future component styles), converting top-level BEM modifier and element selectors into nested `&--*` and `&__*` selectors.
  - Out of scope: changing CSS custom properties, colors, layout values, component behavior, TypeScript or HTML source files, or introducing new components.
- **Acceptance Criteria**:
  1. Every BEM modifier class (e.g., `.button--primary`, `.button--secondary`) is nested inside its block selector as `&--primary` / `&--secondary`.
  2. Every BEM element class (e.g., `.header__inner`, `.hero__title`, `.feature-card__icon`) is nested inside its block selector as `&__inner`, `&__title`, `&__icon`, etc.
  3. No separate top-level selectors exist for modifiers or elements that can be nested under their parent block.
  4. The existing styling output and visual behavior remain unchanged after refactoring.
  5. The project still builds (`ng build`) and tests pass (`ng test`) after the SCSS changes.
- **Related Files**: `src/styles.scss`, `src/app/app.scss`
- **Internal dependencies**: Step 4 (Design the Website Using Cobalt as Inspiration)
- **External dependencies**: Sass compiler (provided by the Angular CLI build pipeline)
- **Notes**: Apply nesting consistently but avoid invalid over-nesting; keep `:host`, media queries, keyframes, and pseudo-class nesting valid SCSS. If a linter is added later, update this spec and `AGENTS.md` conventions accordingly.

# Step 6
# Status: [DONE]
## Add Drag-and-Drop Image Upload to Selector Zone

- **Goal**: Allow users to upload an image by dragging and dropping it onto the existing upload selector zone, using the same validation, feedback, and loading behavior as the click-to-upload file input.
- **Scope**:
  - In scope: handling `dragenter`, `dragover`, `dragleave`, and `drop` events on the `.upload-zone` element; providing clear visual feedback while a file is being dragged over the zone; validating the dropped file's extension against the existing accepted-formats list; loading a valid image into the crop frame; displaying the existing validation error message for unsupported files; preventing default browser drag-and-drop behavior.
  - Out of scope: dropping files onto the crop frame, multi-file or folder upload, drag-and-drop reordering, clipboard paste uploads, server-side upload, and changes to the crop/pan behavior.
- **Acceptance Criteria**:
  1. The `.upload-zone` accepts a dropped image file and loads it into the crop frame exactly like the existing file input.
  2. Dragging one or more files over the upload zone applies a visible active/drag-over style (e.g., dashed border color change, background tint) and prevents the browser's default behavior.
  3. Dropping a file with an unsupported extension shows the existing validation error and does not load an image.
  4. Dropping a valid image resets any previous error message and updates the file input value/state consistently.
  5. The drag-over visual feedback is removed when the drag leaves the zone or after a drop completes.
  6. The existing click-to-upload behavior continues to work unchanged.
  7. Styling changes follow the established design system and BEM/SCSS nesting conventions.
- **Related Files**: `src/app/app.html`, `src/app/app.ts`, `src/app/app.scss`, `SPECS/design-system.md`
- **Internal dependencies**: Step 3 (Image Selection and Crop to 1080x1350), Step 4 (Design the Website Using Cobalt as Inspiration), Step 5 (Enforce SCSS BEM Nesting Convention)
- **External dependencies**: Angular framework, HTML5 Drag and Drop API, HTML5 File API, HTML5 FileReader API
- **Notes**: Reuse the existing `ACCEPTED_EXTENSIONS` constant and `onFileSelected` validation logic where possible. Consider using a small CSS modifier class (e.g., `.upload-zone--active`) for the drag-over state, nested under `.upload-zone` per the BEM convention.

# Step 7
# Status: [DONE]
## Add Close Button to Crop Frame

- **Goal**: Provide users with a clear, one-click way to remove the loaded image and return to the upload zone by adding an X close button in the top-right corner of the crop frame.
- **Scope**:
  - In scope: rendering a close/clear button when an image is loaded, positioning it in the top-right corner of the crop frame, clearing the loaded image and returning to the upload zone on click, resetting related image state, ensuring the button is accessible.
  - Out of scope: modifying crop or pan behavior, changing download logic, altering accepted file formats, and adding animations beyond existing project conventions.
- **Acceptance Criteria**:
  1. When an image is loaded, an X (close) button is visible in the top-right corner of the crop frame.
  2. Clicking the close button removes the loaded image and returns the user to the upload zone.
  3. The close button follows the documented design system and the project's BEM/SCSS nesting conventions.
  4. The close button is keyboard-focusable and has a descriptive accessible label (e.g., `aria-label="Remove image"`).
  5. Existing drag-to-pan, download, re-upload, and drag-and-drop behaviors continue to work unchanged after the close button is added.
- **Related Files**: `src/app/app.html`, `src/app/app.ts`, `src/app/app.scss`, `SPECS/design-system.md`
- **Internal dependencies**: Step 3 (Image Selection and Crop to 1080x1350), Step 4 (Design the Website Using Cobalt as Inspiration), Step 5 (Enforce SCSS BEM Nesting Convention), Step 6 (Add Drag-and-Drop Image Upload to Selector Zone)
- **External dependencies**: Angular framework, HTML5 File API
- **Notes**: The close button should be visually distinct and not obstruct the crop area. Consider an icon-only circular button styled with the existing color tokens, and place it absolutely within the crop frame container.

# Step 8
# Status: [DONE]
## Add Carousel Size Selection and ZIP Export

- **Goal**: Allow users to choose a carousel size from 1 to 5 panels after loading an image, position the image across the combined workspace, and download all resulting 1080×1350 panels as a single ZIP file.
- **Scope**:
  - In scope: adding a carousel size selector (sizes 1–5), expanding the crop workspace to the combined width (1080×1350 up to 5400×1350), panning the image across the full workspace, splitting the final composition into N separate 1080×1350 images, packaging those images into a ZIP archive, and triggering a browser download.
  - Out of scope: server-side processing or storage, individual panel downloads, animated carousel previews, social media platform integrations, and image filters or transformations beyond positioning.
- **Acceptance Criteria**:
  1. After an image is loaded, a carousel size selector is visible with options 1 through 5.
  2. The default selected size is 1, matching the current single-crop behavior.
  3. Selecting size N expands the crop workspace to a width of N × 1080 pixels while preserving the 1080×1350 aspect ratio per panel.
  4. The user can drag/pan the image across the entire combined workspace.
  5. The cropped output is split into N separate 1080×1350 pixel images, one per panel.
  6. The N images are packaged into a single ZIP file and downloaded via the browser.
  7. The images inside the ZIP are named in a clear sequence (e.g., carousel-1.png, carousel-2.png, …).
  8. Changing the carousel size resets or adjusts the image position appropriately without errors.
  9. Existing features (file input, drag-and-drop upload, close button, design system, BEM nesting) continue to work unchanged.
- **Related Files**: `src/app/app.html`, `src/app/app.ts`, `src/app/app.scss`, `SPECS/design-system.md`
- **Internal dependencies**: Step 1 (Initialize Angular Project), Step 3 (Image Selection and Crop to 1080x1350), Step 4 (Design the Website Using Cobalt as Inspiration), Step 5 (Enforce SCSS BEM Nesting Convention), Step 6 (Add Drag-and-Drop Image Upload to Selector Zone), Step 7 (Add Close Button to Crop Frame)
- **External dependencies**: Angular framework, HTML5 Canvas API, HTML5 File API, JSZip library
- **Notes**: The combined workspace for size 5 is 5400×1350 pixels. Consider a responsive display strategy for very wide workspaces (e.g., scaling the preview while keeping output resolution fixed). The exact selector control style should follow the established design system; a segmented button group is recommended. The output image format and quality should be finalized before implementation.

# Step 9
# Status: [DONE]
## Extract Crop Tool into a Dedicated Angular Component

- **Goal**: Move the image crop tool (upload zone, carousel size selector, crop frame, close button, and download actions) out of the monolithic `App` component into a standalone, reusable Angular component, improving separation of concerns and maintainability while preserving all existing behavior.
- **Scope**:
  - In scope: creating a new standalone component (e.g., `CropToolComponent`) under `src/app/crop-tool/`; moving the relevant template markup from `src/app/app.html`, the crop-specific TypeScript logic from `src/app/app.ts`, and the crop-specific SCSS from `src/app/app.scss` into the new component; updating `App` to import and render the new component; keeping the page shell (header, hero, features, footer) in `App`.
  - Out of scope: changing crop/pan/download behavior, modifying the design system, adding routing, creating shared services, or changing existing acceptance criteria for earlier steps.
- **Acceptance Criteria**:
  1. A new standalone `CropToolComponent` exists with its own `.ts`, `.html`, and `.scss` files in `src/app/crop-tool/`.
  2. All crop-tool UI and logic previously in `App` is removed from `App` and lives inside `CropToolComponent`.
  3. The main page continues to render the crop tool and all existing functionality works unchanged: click-to-upload, drag-and-drop upload, file extension validation, drag/pan positioning, carousel size selection, close/clear image, single-image download, and ZIP carousel export.
  4. The new component follows the documented design system and the project's BEM/SCSS nesting conventions.
  5. `ng build` completes successfully and `ng test` passes after the refactor.
- **Related Files**: `src/app/app.html`, `src/app/app.ts`, `src/app/app.scss`, `src/app/app.spec.ts`, `src/app/crop-tool/`, `SPECS/design-system.md`
- **Internal dependencies**: Step 1 (Initialize Angular Project), Step 3 (Image Selection and Crop to 1080x1350), Step 4 (Design the Website Using Cobalt as Inspiration), Step 5 (Enforce SCSS BEM Nesting Convention), Step 6 (Add Drag-and-Drop Image Upload to Selector Zone), Step 7 (Add Close Button to Crop Frame), Step 8 (Add Carousel Size Selection and ZIP Export)
- **External dependencies**: Angular framework, JSZip library, HTML5 Canvas API, HTML5 File API, HTML5 FileReader API, HTML5 Drag and Drop API
- **Notes**: Keep the component interface simple (no required inputs/outputs unless needed). The existing `viewChild`-based approach and signal state should be preserved inside the new component. Update or move relevant unit tests from `app.spec.ts` to a new `crop-tool.spec.ts` as appropriate.

# Step 10
# Status: [DONE]
## Extract Carousel Size Selector to Its Own Angular Component

- **Goal**: Move the carousel size selector UI (sizes 1–5, active state, and accessibility markup) out of `CropToolComponent` into a dedicated, reusable standalone Angular component to improve separation of concerns and testability while preserving existing behavior.
- **Scope**:
  - In scope: creating a new standalone component (e.g., `CarouselSizeSelectorComponent`) under `src/app/carousel-size-selector/`; moving the selector template markup from `src/app/crop-tool/crop-tool.html`, the selector-specific SCSS from `src/app/crop-tool/crop-tool.scss`, and the size-options constant from `src/app/crop-tool/crop-tool.ts` into the new component; defining a minimal input/output interface (e.g., `selectedSize` input and `sizeChange` output); updating `CropToolComponent` to import, render, and bind to the new component.
  - Out of scope: changing the available sizes (1–5) or default size, modifying crop/pan/download behavior, altering the design system, adding routing, or creating shared services.
- **Acceptance Criteria**:
  1. A new standalone `CarouselSizeSelectorComponent` exists with its own `.ts`, `.html`, and `.scss` files in `src/app/carousel-size-selector/`.
  2. The component renders a `role="radiogroup"` control with options 1 through 5 and visually indicates the active option using the existing design system styles.
  3. The component exposes its selected value via an `@Input()` (or signal-based input) and notifies changes via an `@Output()` (or output), keeping the component presentational.
  4. `CropToolComponent` replaces its inline carousel size selector markup with the new component and continues to own the `carouselSize` state used by the crop frame and download logic.
  5. All existing carousel size selector behavior remains unchanged: default selection is 1, clicking an option updates the crop frame width, and the active option is clearly styled.
  6. The new component and updated `CropToolComponent` follow the documented design system and the project's BEM/SCSS nesting conventions.
  7. `ng build` completes successfully and `ng test` passes after the refactor.
  8. Unit tests for `CarouselSizeSelectorComponent` are added or existing tests are updated to cover selection changes and active-state rendering.
- **Related Files**: `src/app/crop-tool/crop-tool.html`, `src/app/crop-tool/crop-tool.ts`, `src/app/crop-tool/crop-tool.scss`, `src/app/crop-tool/crop-tool.spec.ts`, `src/app/carousel-size-selector/`
- **Internal dependencies**: Step 4 (Design the Website Using Cobalt as Inspiration), Step 5 (Enforce SCSS BEM Nesting Convention), Step 8 (Add Carousel Size Selection and ZIP Export), Step 9 (Extract Crop Tool into a Dedicated Angular Component)
- **External dependencies**: Angular framework
- **Notes**: Keep the selector component purely presentational; the `carouselSize` signal and logic that drives the crop frame and ZIP export should remain in `CropToolComponent`. The exact input/output names can be finalized before implementation, but the component must not introduce a new external dependency.
