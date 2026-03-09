# Playwright EQMS Automation Framework

This repository is a Playwright + TypeScript test framework built around reusable base objects, field wrappers, and generated process page objects.

## Framework Structure 

```mermaid
flowchart LR
    T[tests/*.spec.ts] --> F[fixtures/fixtures.ts]
    F --> L[basePages/LoginBase.ts]
    F --> N[components/sideNav.ts]
    F --> S[basePages/SearchScreenBase.ts]

    T --> P[pages/<Letter>/*_p.ts]
    P --> D[basePages/DetailsPageBase.ts]
    D --> B[basePages/BasePage.ts]
    P --> W[components/fields/*Field.ts]
    W --> UI[EQMS UI]

    C[config/env.ts + config/user.ts] --> F
    U[utils/*.ts] --> S
    H[helpers/getTokenApi.ts] --> API[EQMS Web API]

    G[baseFramework/PageObjectGenerator.ts] --> Q[baseFramework/SqlQueries.ts]
    Q --> DB[(SQL Server)]
    G --> P
```

## Framework Relationships

```mermaid
erDiagram
    TEST_SPEC {
        string file_name
        string test_case
    }

    FIXTURE_SET {
        string login
        string nav
        string search
        string details
        string reports
    }

    PROCESS_PAGE {
        string class_name
        string process_name
    }

    DETAILS_PAGE_BASE {
        string saveRecord
        string moveState
        string approveRecord
    }

    BASE_PAGE {
        string fieldRoot
        string sectionByName
    }

    FIELD_COMPONENT {
        string field_type
        string set_or_expect
    }

    PAGE_OBJECT_GENERATOR {
        string generateProcessPages
    }

    SQL_QUERIES {
        string fields
        string scr
        string mcr
        string rcr
    }

    SQL_SERVER {
        string process_metadata
    }

    USER_CONFIG {
        string users
    }

    ENV_CONFIG {
        string defaultPassword
    }

    EQMS_UI {
        string web_application
    }

    TEST_SPEC ||--|| FIXTURE_SET : uses
    TEST_SPEC ||--o{ PROCESS_PAGE : instantiates
    FIXTURE_SET ||--|| USER_CONFIG : consumes
    USER_CONFIG ||--|| ENV_CONFIG : reads

    PROCESS_PAGE }o--|| DETAILS_PAGE_BASE : extends
    DETAILS_PAGE_BASE }o--|| BASE_PAGE : extends
    PROCESS_PAGE ||--o{ FIELD_COMPONENT : exposes
    FIELD_COMPONENT ||--|| EQMS_UI : drives

    PAGE_OBJECT_GENERATOR ||--|| SQL_QUERIES : calls
    SQL_QUERIES ||--|| SQL_SERVER : reads
    PAGE_OBJECT_GENERATOR ||--o{ PROCESS_PAGE : creates
```

## Repository Layout

```text
.
|-- tests/                 # Test specs (UI + API focused)
|-- fixtures/              # Shared Playwright fixtures
|-- pages/                 # Generated process page objects (grouped A..W)
|-- basePages/             # Base page models (login/search/details foundations)
|-- components/            # Reusable UI components
|   `-- fields/            # Field wrappers (TextField, DateField, FileField, etc.)
|-- baseFramework/         # SQL-backed page-object generator
|-- config/                # Typed env/user configuration
|-- helpers/               # API/auth helper utilities
|-- utils/                 # Cross-cutting UI helpers
|-- data/                  # Generator/process input data
|-- testFiles/             # Upload/source files used by tests
`-- playwright.config.ts   # Playwright runtime configuration
```

## Typical Test Flow

```text
spec file
  -> fixtures provide shared objects (login/nav/search/details)
  -> test instantiates a process page object (pages/*_p.ts)
  -> page object exposes typed field wrappers
  -> wrappers interact with UI and assertions
```
