import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import SimpleGrid from './SimpleGrid';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <SimpleGrid />
    </React.StrictMode>
);
