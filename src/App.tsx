import { useState } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { ALLOWED_CHARS, KEYBOARD_KEYS } from './keyboard';

const ROWS = 100;
const COLS = 50;

function createEmptyGrid() {
    return Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => ''),
    );
}

interface FocusedCell {
    row: number;
    col: number;
}

function App() {
    const [grid, setGrid] = useState<string[][]>(createEmptyGrid);
    const [focusedCell, setFocusedCell] = useState<FocusedCell | null>(null);

    const handleCellChange = (row: number, col: number, value: string) => {
        const char = value.slice(0, 1);
        const isAllowed = char === '' || ALLOWED_CHARS.test(char);

        if (!isAllowed) {
            return;
        }

        setGrid((current) => {
            const next = current.map((r) => [...r]);
            next[row][col] = char;
            return next;
        });
    };

    const handleCellFocus = (row: number, col: number) => {
        setFocusedCell({ row, col });
    };

    const handleKeyPress = (key: string) => {
        if (!focusedCell) {
            return;
        }

        handleCellChange(focusedCell.row, focusedCell.col, key);
    };

    const handleClearCell = () => {
        if (!focusedCell) {
            return;
        }

        handleCellChange(focusedCell.row, focusedCell.col, '');
    };

    const selectedCellLabel = focusedCell
        ? `Selected cell: row ${focusedCell.row + 1}, col ${focusedCell.col + 1}`
        : 'Select a cell to enter values using the on-screen keyboard.';

    return (
        <div className="app-shell">
            <header className="header">
                <h1>Arithmetic Sandbox</h1>
                <p>
                    Type one number or operator per square. Use +, -, ×, ÷, or
                    the keyboard operators +, -, *, /.
                </p>
            </header>

            <main>
                <section className="grid-card">
                    <div className="grid-meta">
                        <p>
                            Click a cell and type a single character. Empty
                            cells are allowed.
                        </p>
                    </div>
                    <Grid
                        grid={grid}
                        onCellChange={handleCellChange}
                        onCellFocus={handleCellFocus}
                    />
                </section>
                <Keyboard
                    keys={KEYBOARD_KEYS}
                    onKeyPress={handleKeyPress}
                    onClear={handleClearCell}
                    selectedCellLabel={selectedCellLabel}
                />
            </main>

            <footer className="footer">
                <p>
                    Lines, decimal points, and bus-stop division notation will
                    be added in later stages.
                </p>
            </footer>
        </div>
    );
}

export default App;
