# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure and Architecture

This repository contains examples for `Midscene.js`, a tool for automating tasks on Web Browsers and Android devices. This is a simplified Android automation project with a clean, organized structure.

### Current Project Structure

```
C:\Projects\midscene-example/
├── tests/                    # Test automation scripts
│   ├── test_switch_layer.ts  # Layer switching automation
│   └── test_search_file.ts  # File search automation
├── shared/                   # Shared utilities and initialization
│   ├── agent.ts             # Device connection and agent setup
│   └── utils.ts             # Common helper functions
├── scripts/                  # Automation scripts
│   └── run-all.ts           # Batch test runner
├── config/                   # Configuration files
│   └── tsconfig.json        # TypeScript configuration
├── midscene_run/             # Runtime logs and reports
└── package.json             # Project scripts and dependencies
```

### Key Components

-   **`tests/`**: Contains individual test modules for different automation scenarios
-   **`shared/`**: Shared utilities including device initialization and common helpers
-   **`scripts/`**: Utility scripts for running tests in batch
-   **`config/`**: TypeScript and other configuration files

A crucial part of the setup is creating a `.env` file at the root of the project directory and providing an `OPENAI_API_KEY`.

## Common Commands

### Current Project (Midscene Android Automation)

-   **Run layer switching test:** `npm run test-switch-layer`
-   **Run file search test:** `npm run test-search`
-   **Run all tests:** `npm run test:all`
-   **Initialize agent connection:** `npm run test`

### Available Scripts

-   `npm run test-switch-layer` - Execute the layer switching automation test
-   `npm run test-search` - Execute the file search automation test
-   `npm run test:all` - Run all test scripts in batch mode
-   `npm run test` - Initialize device connection and agent setup

## Setup

1.  **Dependencies**: Run `npm install` in the project root directory.
2.  **Environment Variables**: Create a `.env` file in the project root and add your OpenAI API key:
    ```
    OPENAI_API_KEY="YOUR_TOKEN"
    ```
3.  **Device Connection**: Ensure your Android device is connected and USB debugging is enabled.

### Test Organization

-   Tests are organized by functionality in the `tests/` directory
-   Each test file follows the naming pattern `test_[feature].ts`
-   Shared utilities are located in `shared/` directory
-   The `scripts/run-all.ts` file automatically discovers and executes all tests
