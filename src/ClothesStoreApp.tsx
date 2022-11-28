import { BrowserRouter } from 'react-router-dom';
import { ClothesStorePage } from './clothesStore';
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
