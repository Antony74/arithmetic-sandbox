import type { KeyboardKey } from '../keyboard';

interface KeyboardProps {
    keys: KeyboardKey[];
    onKeyPress: (key: string) => void;
    onClear: () => void;
    selectedCellLabel: string;
}

function Keyboard({ keys, onKeyPress, onClear, selectedCellLabel }: KeyboardProps) {
    return (
        <div className="keyboard-wrapper">
            <div className="keyboard-header">
                <div>
                    <h2>Virtual keyboard</h2>
                    <p>{selectedCellLabel}</p>
                </div>
                <button type="button" className="keyboard-clear" onClick={onClear}>
                    Clear cell
                </button>
            </div>

            <div className="keyboard">
                {keys.map((key) => (
                    <button
                        key={key.value}
                        type="button"
                        className="keyboard-button"
                        onClick={() => onKeyPress(key.value)}
                    >
                        {key.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Keyboard;
