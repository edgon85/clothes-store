import ropa from '../../../assets/images/products/sudadero-amarillo.jpg';

export const ProductCard = () => {
  return (
    <div className="card-product">
      {/* <div className="card-content"> */}
      <div className="image">
        <img src={ropa} alt="sidadero amarillo" />
      </div>
      <h6 className="title">Amarillo</h6>
      <div className="filter-colors">
        <span className="product-color color-selected"></span>
        <span className="product-color"></span>
        <span className="product-color"></span>
      </div>
      <div className="card-footer">
        <p className="description">365 Signature sudadera con capucha</p>
        <h4 className="price">$ 175 USA</h4>
      </div>
      {/* </div> */}
    </div>
  );
};
