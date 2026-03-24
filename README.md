# 🚀 Playwright Test Framework (TypeScript)

This repository contains a **Playwright + TypeScript automation framework** designed for testing complex enterprise web applications (specifically EQMS-style systems).

The framework emphasizes:
- **Scalability** through layered abstraction (Base Pages, Components, Fixtures)
- **Maintainability** via reusable field wrappers and Page Object Models (POM)
- **Dynamic page generation** using SQL metadata
- **Separation of concerns** between test logic, UI interaction, and data

---

## 🧠 Key Features

- Page Object Model (POM) with inheritance-based design
- Reusable Field Components (TextField, Dropdown, etc.)
- Fixture-driven test composition
- Dynamic Page Object Generation from SQL metadata
- Encapsulated assertions within components
- Support for UI and API testing
- Utilities for common workflows

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- SQL Server (for metadata-driven page generation)
- dotenv

---

## 📦 Project Structure

playWright-Test-Framework/
├── components/
├── fixtures/
├── helpers/
├── pages/
├── tests/
├── utils/
├── playwright.config.ts
└── package.json

---

## ⚙️ Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Access to the target application under test
- (Optional) SQL Server access for page generation

---

## 🔧 Setup

```bash
npm install
npx playwright install
```

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory:

```
BASE_URL=
API_BASE_URL=

DEFAULT_USERNAME=
DEFAULT_PASSWORD=

SQL_SERVER=
SQL_DATABASE=
SQL_USERNAME=
SQL_PASSWORD=
```

---

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

Run tests by tag:
```bash
npx playwright test --grep @Api
```

Run in headed mode:
```bash
npx playwright test --headed
```

---

## 🧪 How Tests Are Structured

This framework is designed so that test files focus on workflow and intent, while implementation details are handled by fixtures, page objects, and reusable field/component wrappers.

Key patterns used in the test layer:
- Fixtures provide the required pages and setup
- Page objects model process pages and shared UI behavior
- Field wrappers encapsulate interactions with controls
- Assertions are abstracted out of the spec layer whenever practical

For real examples, see the `tests/e2e` folder.

---

## 🏗 Framework Architecture

The framework is built around layered abstraction:

- Tests → define workflows only
- Fixtures → manage setup and dependencies
- Pages → represent application screens
- Components → handle UI interaction logic
- Helpers/Utils → support API, auth, and shared logic

---

## 🧬 Page Object Generation (SQL-Driven)

This framework supports dynamic generation of page objects using SQL metadata.

### How to Run

```bash
npx ts-node ./baseFramework/PageObjectGenerator.ts <processId>
```

---

## 🧱 Design Principles

- Encapsulation
- Reusability
- Scalability
- Readability
- Extensibility

---

## 👨‍💻 Author

David Owen Howard

---

## 📝 License

This project is for demonstration and portfolio purposes.
