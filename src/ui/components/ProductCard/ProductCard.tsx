import ropa from '../../../assets/images/products/1.jpg';
import { product } from '../../../types';

type Props = {
  product: product;
};

export const ProductCard = ({ product }: Props) => {
  const imagePath = `/src/assets/images/products/${product.coverImage}.jpg`;

  // console.log(imagePath);
  return (
    <div className="card-product">
      {/* <div className="card-content"> */}
      <div className="image">
        <img src={imagePath} alt={product.name} />
      </div>
      <h6 className="title">{product.name}</h6>
      <div className="filter-colors">
        <span className="product-color color-selected"></span>
        <span className="product-color"></span>
        <span className="product-color"></span>
      </div>
      <div className="card-footer">
        <p className="description">{product.detail}</p>
        <h4 className="price">
          $ {product.price} {product.currency}
        </h4>
      </div>
      {/* </div> */}
    </div>
  );
};
