import { useEffect, useRef } from 'react';
import Cell from './Cell';

interface GridProps {
    grid: string[][];
    onCellChange: (row: number, col: number, value: string) => void;
    onCellFocus: (row: number, col: number) => void;
}

function Grid({ grid, onCellChange, onCellFocus }: GridProps) {
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
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
