import { useState } from 'react';
import Grid from './components/Grid';

const ROWS = 5;
const COLS = 7;
const ALLOWED_CHARS = /^[0-9+\-*/]$/;

function createEmptyGrid() {
  return Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => ''));
}

function App() {
  const [grid, setGrid] = useState<string[][]>(createEmptyGrid);

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

  return (
    <div className="app-shell">
      <header className="header">
        <h1>Arithmetic Sandbox</h1>
        <p>Type one number or operator per square. Use +, -, ×, ÷, or the keyboard operators +, -, *, /.</p>
      </header>

      <main>
        <section className="grid-card">
          <div className="grid-meta">
            <p>Click a cell and type a single character. Empty cells are allowed.</p>
          </div>
          <Grid grid={grid} onCellChange={handleCellChange} />
        </section>
      </main>

      <footer className="footer">
        <p>Lines, decimal points, and bus-stop division notation will be added in later stages.</p>
      </footer>
    </div>
  );
}

export default App;
