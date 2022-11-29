import { Navigate, Route, Routes } from 'react-router-dom';
import { ClothesStorePage } from '../clothesStore';
import { ProductDetail } from '../clothesStore';
import { CartPage } from '../pages';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<ClothesStorePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <CartPage />
    </>
  );
};
