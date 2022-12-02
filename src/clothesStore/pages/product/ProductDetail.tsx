import image4 from '../../../assets/images/products/detail-4.jpg';
import image1 from '../../../assets/images/products/detail-1.jpg';
import image2 from '../../../assets/images/products/detail-2.jpg';
import image5 from '../../../assets/images/products/detail-5.jpg';
import image6 from '../../../assets/images/products/detail-6.jpg';
import { Product } from '../../../types';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import api from '../../../data/api';
import { useCart } from '../../../hooks';

export const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const { pathname } = useLocation();

  const { cartItems, addToCart, deleteToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useMemo(() => {
    api.product.list().then((resp) => {
      const search = resp.find((prod) => prod.id === `${id}`);

      setProduct(search);
    });
  }, [id]);

  const handleAddProductToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      {product === undefined ? (
        <h3>Cargando...</h3>
      ) : (
        <section className="product-detail">
          <div className="content">
            <div className="images-grid">
              <img
                src={`/src/assets/images/products/${product?.coverImage}.jpg`}
                alt=""
              />
              <img src={image6} alt="" />
              <img src={image1} alt="" />
              <img src={image4} alt="" />
              <img src={image2} alt="" />
              <img src={image5} alt="" />
            </div>
            <div className="product-info">
              <nav className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/home">Tienda</Link>
                  </li>
                  <li>
                    <Link to="/home">Hombres - sudaderas</Link>
                  </li>
                  <li>
                    <span>Sudadera 365 Signature</span>
                  </li>
                </ul>
              </nav>
              <h2 className="title">{product?.name}</h2>
              <h3 className="price">
                ${product?.price} {product?.currency}
              </h3>

              <div className="colors">
                <h4>Colors</h4>
                <div className="color-content">
                  <span className="color-item bg-1"></span>
                  <span className="color-item bg-2"></span>
                  <span className="color-item bg-3"></span>
                  <span className="color-item bg-4"></span>
                  <span className="color-item bg-5"></span>
                  <span className="color-item bg-6"></span>
                  <span className="color-item bg-7"></span>
                </div>
              </div>

              <div className="size">
                <h4>Tamaños</h4>
                <div className="size-content">
                  <span className="size-item">XXS</span>
                  <span className="size-item">XS</span>
                  <span className="size-item">S</span>
                  <span className="size-item">M</span>
                  <span className="size-item">L</span>
                  <span className="size-item">XL</span>
                  <span className="size-item">XXL</span>
                </div>
              </div>

              {cartItems.some((prod) => prod.product.id === product.id) ? (
                <button
                  className="btn-danger"
                  onClick={() => deleteToCart(product)}
                >
                  Eliminar del carrito
                </button>
              ) : (
                <button
                  className="btn-add"
                  onClick={() => handleAddProductToCart(product)}
                >
                  Añadir al carrito
                </button>
              )}

              <div className="description">
                <div className="desc-nav">
                  <h4 className="is-selected">DESCRIPCIÓN</h4>
                  <h4>ENTREGA Y DEVOLUCIONES</h4>
                  <h4>TALLAJE</h4>
                </div>
                <p>{product?.detail}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
