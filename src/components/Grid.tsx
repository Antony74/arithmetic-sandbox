import { useEffect, useRef } from 'react';
import Cell from './Cell';

interface GridProps {
    grid: string[][];
    onCellChange: (row: number, col: number, value: string) => void;
    onCellFocus: (row: number, col: number) => void;
    onValidInput?: (row: number, col: number) => void;
    onNavigate?: (row: number, col: number, direction: 'up' | 'down' | 'left' | 'right') => void;
}

function Grid({ grid, onCellChange, onCellFocus, onValidInput, onNavigate }: GridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const columns = grid[0]?.length ?? 0;

        if (gridRef.current) {
            gridRef.current.style.setProperty('--grid-cols', String(columns));
        }
    }, [grid]);

    return (
        <div ref={gridRef} className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cellValue, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cellValue}
                            onChange={(value) =>
                                onCellChange(rowIndex, colIndex, value)
                            }
                            onFocus={() => onCellFocus(rowIndex, colIndex)}
                            onValidInput={onValidInput ? () => onValidInput(rowIndex, colIndex) : undefined}
                            onNavigate={onNavigate ? (direction) => onNavigate(rowIndex, colIndex, direction) : undefined}
                            row={rowIndex}
                            col={colIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
