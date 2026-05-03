import Cell from './Cell';

interface GridProps {
    grid: string[][];
    onCellChange: (row: number, col: number, value: string) => void;
}

function Grid({ grid, onCellChange }: GridProps) {
    return (
        <div className="grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cellValue, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cellValue}
                            onChange={(value) =>
                                onCellChange(rowIndex, colIndex, value)
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
