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
        <div className="text-gray-500 text-sm">{brand}</div>

<div className="flex gap-1 mt-3 sm:mt-4 md:ml-2" style={{justifyContent:'space-between'}}>
  {/* Details Button */}
  <Link
    to={`/products/${id}`}
    className="w-28 h-10 flex justify-center items-center rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
  >
    Details
  </Link>

  {/* Add to Cart Button */}
  <button
    onClick={() => dispatch(addToCart(product))}
    className="w-28 h-10 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition "
  >
    Add to Cart
  </button>
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
