# Step 1
# Status: [TODO]
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
