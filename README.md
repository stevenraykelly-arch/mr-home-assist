# Agent Architecture

This workspace operates on a 3-layer architecture to separate concerns and maximize reliability.

## The 3 Layers

1.  **Directive (What to do)**
    *   SOPs in `directives/` (Markdown).
    *   Define goals, inputs, tools, and edge cases.

2.  **Orchestration (Decision making)**
    *   The AI Agent.
    *   Reads directives, executes tools, handles errors.

3.  **Execution (Doing the work)**
    *   Python scripts in `execution/`.
    *   Deterministic, reliable, testable.

## Operating Principles

*   **Check for tools first**: Reuse existing scripts in `execution/`.
*   **Self-anneal**: Fix broken scripts, update directives with learnings.
*   **Update directives**: Treat them as living documents.

## Directory Structure

*   `directives/`: Standard Operating Procedures.
*   `execution/`: Python scripts.
*   `.tmp/`: Intermediate files (never committed).
*   `.env`: Environment variables.
