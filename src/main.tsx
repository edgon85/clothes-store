import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClothesStoreApp } from './ClothesStoreApp';
import { ModalCheckoutProvider } from './context';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalCheckoutProvider>
      <ClothesStoreApp />
    </ModalCheckoutProvider>
  </React.StrictMode>
);
