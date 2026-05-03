# Arithmetic Sandbox Specification

## Goal

Build a simple, spreadsheet-like React app for practicing long arithmetic with KS2-friendly clarity.

## Stage 1: Single-character grid input

### Overview

- Create a fixed grid of editable cells.
- Each cell accepts exactly one character.
- Allowed characters are digits (`0`–`9`) and basic arithmetic operators (`+`, `-`, `*`, `/`).
- Each cell is visually large, clearly separated, and easy to focus.
- The UI remains uncluttered and child-friendly.

### Requirements

- Implement using React and Vite.
- Use TypeScript for component props and state safety.
- Render a grid on the screen with a clear instruction panel.
- Make each cell focusable.
- Enforce one-character entry per cell.
- Block invalid characters from being entered.
- Support clearing the cell with backspace/delete.

### UX details

- Display a short header explaining how to use the grid.
- Keep colors soft and contrast high for readability.
- Show a visible focus outline on the active cell.
- Avoid advanced spreadsheet features and formula parsing in this stage.

### Files introduced

- `src/App.tsx` — top-level layout and grid state.
- `src/components/Grid.tsx` — renders the grid layout.
- `src/components/Cell.tsx` — individual cell editing behavior.
- `src/styles.css` — simple KS2-friendly presentation.

## Future stages

### Stage 2: Notation and layout decorations

- Add drawing support for lines between cells.
- Add decimal point rendering separate from core cell content.
- Support bus-stop division notation over cells.
- Keep these decorations in a separate rendering layer so stage 1 data model stays simple.

### Stage 3: Interaction and math feedback

- Add keyboard navigation between cells.
- Add optional expression validation.
- Add a mode for multi-digit numbers and alignment hints.

## Design decisions

- Cell content remains a single-character string.
- Presentation and decorations are separated from the core grid model.
- The first iteration focuses on content entry and accessibility.
