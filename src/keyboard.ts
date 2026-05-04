export type KeyboardKey = {
    value: string;
    label: string;
};

export const ALLOWED_CHARS = /^[0-9+\-*/]$/;
export const CELL_PATTERN = /^[0-9+\-*/]?$/;

export const KEYBOARD_KEYS: KeyboardKey[] = [
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '+', label: '+' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '-', label: '-' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '*', label: 'x' },
    { value: '0', label: '0' },
    { value: '/', label: '÷' },
];
