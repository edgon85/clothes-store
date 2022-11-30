import { TrashIcon } from '../../../assets/icons';
import image4 from '../../../assets/images/products/detail-4.jpg';

export const CardItemCart = () => {
  return (
    <div className="card-item">
      <div className="image">
        <img src={image4} alt="" />
      </div>
      <div className="card-info">
        <h3>365 Signature sudadera con capucha</h3>
        <h2>$175 USA</h2>
        <div className="actions">
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className="delete">
            <TrashIcon size="24" />
          </div>
        </div>
      </div>
    </div>
  );
};
