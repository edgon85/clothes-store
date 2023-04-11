import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClothesStoreApp } from './ClothesStoreApp';
import { Cartprovider, ModalCheckoutProvider } from './context';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ModalCheckoutProvider>
    <Cartprovider>
      <ClothesStoreApp />
    </Cartprovider>
  </ModalCheckoutProvider>
  </React.StrictMode>
);
