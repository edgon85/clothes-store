import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export const ClothesStoreApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
