# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure and Architecture

This repository contains examples for `Midscene.js`, a tool for automating tasks on Web Browsers and Android devices. The project is structured into several demo directories, each showcasing a different integration or use case.

-   **`android/`**: Contains examples for using Midscene.js with Android.
    -   `javascript-sdk-demo/`: Demonstrates basic automation tasks on Android using the JavaScript SDK.
    -   `vitest-demo/`: Shows how to integrate Midscene.js with Vitest for testing on Android.
    -   `yaml-scripts-demo/`: Provides examples of automating Android tasks using YAML scripts.
-   **`connectivity-test/`**: A utility to test the connectivity to the LLM service.
-   Other directories like `playwright-demo/`, `puppeteer-demo/`, etc., are also present as suggested by the root `README.md`.

A crucial part of the setup for all examples is creating a `.env` file at the root of each example directory and providing an `OPENAI_API_KEY`.

## Common Commands

### Android JavaScript SDK Demo (`android/javascript-sdk-demo/`)

-   **Run demo:** `npx tsx demo.ts` or `npm test`
-   **Run demo with YAML:** `npx tsx demo-run-yaml.ts` or `npm run test-yaml`

### Android Vitest Demo (`android/vitest-demo/`)

-   **Run all tests:** `npm run test`
-   **Run a specific test:** `npm run test -- [test-file.test.ts]`
    -   Example: `npm run test -- setting.test.ts`

### Android YAML Scripts Demo (`android/yaml-scripts-demo/`)

-   **Run all YAML scripts:** `midscene ./midscene-scripts/` or `npm test`
-   **Run a specific YAML script:** `midscene ./midscene-scripts/[script-name.yaml]`
    -   Example: `midscene ./midscene-scripts/maps-navigation.yaml`

### Connectivity Test (`connectivity-test/`)

-   **Run connectivity test:** `npm run test`

## Setup

1.  **Dependencies**: Run `npm install` in the specific example directory you are working with.
2.  **Environment Variables**: Create a `.env` file in the example directory and add your OpenAI API key:
    ```
    OPENAI_API_KEY="YOUR_TOKEN"
    ```
