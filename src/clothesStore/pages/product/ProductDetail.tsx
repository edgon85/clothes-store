import image4 from '../../../assets/images/products/detail-4.jpg';
import image1 from '../../../assets/images/products/detail-1.jpg';
import image2 from '../../../assets/images/products/detail-2.jpg';
import image3 from '../../../assets/images/products/detail-3.jpg';
import image5 from '../../../assets/images/products/detail-5.jpg';
import image6 from '../../../assets/images/products/detail-6.jpg';

export const ProductDetail = () => {
  return (
    <section className="product-detail">
      <div className="content">
        <div className="images-grid">
          <img src={image3} alt="" />
          <img src={image6} alt="" />
          <img src={image1} alt="" />
          <img src={image4} alt="" />
          <img src={image2} alt="" />
          <img src={image5} alt="" />
        </div>
        <div className="product-info">
          {/* <div className="breadcrumbs">
            <ul>
              <li>
                <a href="#">Tienda</a>
              </li>
              <li>
                <a href="#">Hombres - sudaderas</a>
              </li>
              <li>
                <a href="#">Sudadera 365 Signature</a>
              </li>
            </ul>
          </div> */}
          <h2 className="title">365 Signature sudadera con capucha</h2>
          <h3 className="price">$175 USA</h3>

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

          <button className="btn-add">Añadir al carrito</button>

          <div className="description">
            <div className="desc-nav">
              <h4 className="is-selected">DESCRIPCIÓN</h4>
              <h4>ENTREGA Y DEVOLUCIONES</h4>
              <h4>TALLAJE</h4>
            </div>
            <p>
              Nombrada apropiadamente por ti, nuestra sudadera con capucha 365
              Signature es el codiciado favorito acogedor que seguirás buscando.
              Crea tu propio chándal 365 Signature con estilos y colores para
              todos, de todos los tamaños. Esta exclusiva sudadera con capucha
              está confeccionada con una mezcla de algodón orgánico, reciclado y
              de origen responsable. Su tela premium, más gruesa y más pesada
              está cepillada en el interior y es perfecta para los días en los
              que desea algo más suave y acogedor. Se ve tan bien con jeans como
              con algo un poco más elegante. El color negro se crea mediante un
              sistema de agua reciclada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
