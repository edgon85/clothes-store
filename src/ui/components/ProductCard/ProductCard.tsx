import { useNavigate } from 'react-router-dom';
import ropa from '../../../assets/images/products/1.jpg';
import { Product } from '../../../types';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const imagePath = `/src/assets/images/products/${product.coverImage}.jpg`;

  const navigate = useNavigate();

  const handleProductDetail = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card-product" onClick={() => handleProductDetail(product)}>
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
