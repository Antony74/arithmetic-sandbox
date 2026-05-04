import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root');

if (root instanceof HTMLElement) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
    throw new Error(`HTMLElement with id='root' not found`);
}
