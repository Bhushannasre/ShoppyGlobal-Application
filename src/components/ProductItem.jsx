import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice.js';

export default function ProductItem({ product }){
  const dispatch = useDispatch();
  const { id, title, price, thumbnail, brand } = product;

  return (
    <article className="card" aria-labelledby={'p-'+id}>
      <img src={thumbnail} alt={title} loading="lazy" />
      <div className="card-body">
        <div style={{display:'flex',justifyContent:'space-between',gap:'.5rem'}}>
          <h3 id={'p-'+id} style={{margin:0,fontSize:'1rem'}}>{title}</h3>
          <div className="price">${price}</div>
        </div>
        <div className="muted" style={{fontSize:'.9rem'}}>{brand}</div>
        <div className="card-actions" style={{marginTop:'.5rem'}}>
          <Link className="btn" to={`/products/${id}`}>Details</Link>
          <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    brand: PropTypes.string
  }).isRequired
};
