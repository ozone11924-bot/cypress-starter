![CI](https://github.com/ozone11924-bot/express-automation-app/actions/workflows/cypress.yml/badge.svg)

# Express CRUD App – Cypress Automation Project

A lightweight Express.js CRUD application paired with a complete Cypress automation suite. This project demonstrates API testing, UI testing, test organization, and real‑world automation practices suitable for a professional QA portfolio.

---

## 🚀 Overview

This project showcases a full testing workflow:

- A backend built with **Node.js + Express**
- A minimal frontend using **vanilla HTML + fetch()**
- A Cypress test suite covering:
  - API health checks
  - CRUD operations
  - Dashboard loading
  - UI interactions
- A clean project structure designed for clarity and maintainability

The goal is to demonstrate practical QA automation skills in a real application environment.

---

## 📁 Project Structure

```text
express-automation-app/
│
├── public/
│   ├── index.html
│   └── dashboard.html
│
├── routes/
│   └── items.js
│
├── cypress/
│   ├── e2e/
│   │   ├── add_item.cy.js
│   │   ├── update_item.cy.js
│   │   ├── delete_item.cy.js
│   │   ├── dashboard_load.cy.js
│   │   └── api_health.cy.js
│   └── support/
│       └── e2e.js
│
├── server.js
├── package.json
└── cypress.config.js

## ?? Case Study: Express CRUD App Automation

This project demonstrates how to design and execute a full automation strategy for a lightweight Express.js CRUD application. The goal was to validate both backend API behavior and UI functionality while building a clean, maintainable Cypress test suite suitable for a professional QA portfolio.

### ?? Objectives
- Validate core CRUD functionality through API and UI tests.
- Ensure the dashboard correctly loads and displays items.
- Build a stable automation suite that runs locally and in CI.
- Document real-world testing challenges and how they were addressed.

### ?? What Was Automated
- API health checks to confirm server availability.
- GET, POST, PUT, DELETE operations through direct API testing.
- Dashboard UI loading to verify that items render correctly.
- UI interactions for adding items (with known limitations).
- CI pipeline automation using GitHub Actions with artifact uploads.

### ?? Key Challenges
- Cypress iframe sandboxing prevented static HTML pages from sending POST requests through fetch().
- Intercepting requests from static HTML pages was unreliable due to the lack of a real frontend framework.
- CI environment timing required adding a delay to ensure the Express server was fully started before running tests.

### ??? Decisions and Solutions
- Shifted POST validation to API tests, which are more reliable and faster.
- Treated the UI POST limitation as a known constraint of Cypress + static HTML.
- Added wait-on and server startup logic in CI to stabilize test execution.
- Organized tests into clear categories (API vs UI) for readability and maintainability.

### ?? What Works Well
- API tests run quickly and consistently.
- Dashboard UI tests reliably confirm that items load and display.
- CI pipeline runs automatically on every push and pull request.
- Artifacts (screenshots/videos) are uploaded on failure for debugging.

### ?? Future Improvements
- Replace static HTML with a React or Vite frontend to enable full UI automation.
- Add database persistence for more realistic test scenarios.
- Add visual regression testing (Percy or Applitools).
- Add Playwright version of the test suite for cross-browser coverage.
## ??? Tech Stack

### Core Application
- Node.js � Runtime powering the backend logic.
- Express.js � Lightweight framework used to build the CRUD API.
- HTML/CSS/JavaScript � Simple static frontend for interacting with the API.

### Automation & Testing
- Cypress � End-to-end testing framework for UI and API validation.
- Mocha/Chai (built into Cypress) � Test runner and assertion library.
- Cypress Dashboard (optional) � For enhanced test insights.

### Continuous Integration
- GitHub Actions � Automated CI pipeline running Cypress tests on every push and pull request.
- Artifact Uploads � Stores screenshots and videos from failing tests for debugging.

### Tooling & Development
- npm � Dependency and script management.
- VS Code � Primary development environment.
- Git � Version control for tracking changes and maintaining clean commits.
## ??? Roadmap

### Short-Term Enhancements
- Add screenshots and a Test Evidence section to strengthen the README.
- Add API-only tests for full CRUD coverage.
- Add custom Cypress commands to reduce duplication and improve maintainability.
- Improve test organization by grouping UI and API suites more clearly.

### Medium-Term Improvements
- Replace static HTML with a modern frontend (React or Vite) to enable full UI automation.
- Add database persistence (SQLite or MongoDB) for more realistic test scenarios.
- Add visual regression testing using Percy or Applitools.
- Add environment configuration support (dev/test/prod) for more flexible testing.

### Long-Term Goals
- Add Docker support to containerize the app and test environment.
- Add Playwright version of the test suite for cross-browser coverage.
- Add API schema validation using tools like Zod or AJV.
- Expand CI pipeline with parallelization, caching, and matrix testing.
## ? Challenges & Learnings

### ?? Understanding Cypress Limitations with Static HTML
One of the biggest challenges was discovering that Cypress cannot reliably intercept or trigger fetch() POST requests from static HTML pages because they run inside Cypress�s internal iframe. This caused the �Add Item� UI test to fail even though the backend API worked correctly. The experience reinforced the importance of knowing how tools behave under the hood and validating functionality through multiple layers (UI vs API).

### ?? Differentiating UI Failures from Backend Failures
The failing UI POST test initially looked like an application bug, but API tests proved the backend was functioning correctly. This highlighted the value of having both UI and API coverage. When UI tests fail, API tests help isolate whether the issue is in the frontend, backend, or the test environment itself.

### ?? Stabilizing Tests in CI
Running tests in GitHub Actions introduced timing issues because the Express server needed a moment to start before Cypress could connect. Adding a short delay and using wait-on stabilized the pipeline. This was a practical lesson in adapting tests for CI environments, where timing and resource constraints differ from local machines.

### ??? Improving Test Structure and Maintainability
Organizing tests into clear categories (API vs UI) made the suite easier to understand and maintain. This structure also made it easier to identify which tests were affected by Cypress limitations and which were stable and reliable.

### ?? Building a Real CI Pipeline
Setting up GitHub Actions to run Cypress tests on every push and pull request provided hands-on experience with continuous integration. Uploading screenshots and videos as artifacts improved debugging and demonstrated how automation fits into a real engineering workflow.

### ?? Key Takeaways
- UI tests and API tests complement each other and help isolate issues faster.
- Understanding tool limitations is essential for writing stable, realistic tests.
- CI environments require additional considerations like timing, ports, and startup delays.
- Clear test organization improves readability and long-term maintainability.
- Automation is not just about writing tests�it�s about building reliable systems around them.
## ?? Test Evidence

This section highlights visual proof of the automation suite running successfully. It includes UI screenshots, Cypress Test Runner views, and CI pipeline results to demonstrate how the tests behave in both local and continuous integration environments.

### Dashboard UI
Shows the application�s main interface and confirms that the Express server and frontend load correctly.
assets/screenshots/dashboard.png

### Cypress Test Runner
Displays all tests passing locally, demonstrating the stability of the automation suite.
assets/screenshots/cypress-runner.png

### Expanded Test Steps
Shows detailed Cypress command execution for transparency and debugging clarity.
assets/screenshots/test-steps.png

### GitHub Actions CI Run
Confirms that the full test suite executes automatically on every push and pull request.
assets/screenshots/ci-run.png

### Notes
- Screenshots will be added after the next successful test run.
- CI artifacts (videos and failure screenshots) are automatically uploaded for debugging.
