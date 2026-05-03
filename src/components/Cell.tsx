import { ChangeEvent } from 'react';
import { CELL_PATTERN } from '../keyboard';

interface CellProps {
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
}

function Cell({ value, onChange, onFocus }: CellProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.slice(0, 1);

        if (text === '' || CELL_PATTERN.test(text)) {
            onChange(text);
        }
    };

    return (
        <div className="cell-wrapper">
            <input
                className="cell-input"
                type="text"
                inputMode="text"
                maxLength={1}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                aria-label="Arithmetic cell"
                spellCheck={false}
            />
        </div>
    );
}

export default Cell;
