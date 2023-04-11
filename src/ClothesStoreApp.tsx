import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export const ClothesStoreApp = () => {
  function getMaxGifts(
    giftsCities: number[],
    maxGifts: number,
    maxCities: number
  ) {
    // console.log(giftsCities);
    return 0;
  }

  const giftsCities = [12, 3, 11, 5, 7];
  const maxGifts = 20;
  const maxCities = 3;

  getMaxGifts(giftsCities, maxGifts, maxCities); // 20
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};;
