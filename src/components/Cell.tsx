import { ChangeEvent, KeyboardEvent } from 'react';
import { CELL_PATTERN } from '../keyboard';

type CellProps = {
    value: string;
    onChange: (value: string) => void;
    onFocus: () => void;
    onValidInput?: () => void;
    onNavigate?: (direction: 'up' | 'down' | 'left' | 'right') => void;
    row: number;
    col: number;
};

export const Cell = ({
    value,
    onChange,
    onFocus,
    onValidInput,
    onNavigate,
    row,
    col,
}: CellProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.slice(0, 1);

        if (text === '' || CELL_PATTERN.test(text)) {
            onChange(text);
            if (text !== '' && onValidInput) {
                onValidInput();
            }
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
        onFocus();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowUp' && onNavigate) {
            event.preventDefault();
            onNavigate('up');
        } else if (event.key === 'ArrowDown' && onNavigate) {
            event.preventDefault();
            onNavigate('down');
        } else if (event.key === 'ArrowLeft' && onNavigate) {
            event.preventDefault();
            onNavigate('left');
        } else if (event.key === 'ArrowRight' && onNavigate) {
            event.preventDefault();
            onNavigate('right');
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
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                aria-label="Arithmetic cell"
                spellCheck={false}
                data-row={row}
                data-col={col}
            />
        </div>
    );
};
