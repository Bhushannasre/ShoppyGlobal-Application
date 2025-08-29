import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, increment, decrement, updateQuantity } from '../redux/cartSlice.js';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, title, price, thumbnail, quantity } = item;

  return (
    <div className="card" style={{display:'grid', gridTemplateColumns:'100px 1fr auto', gap:'1rem', alignItems:'center', padding:'.75rem'}}>
      <img src={thumbnail} alt={title} style={{width:'100%', height:80, objectFit:'cover'}} />
      <div>
        <h3 style={{margin:'0 0 .25rem 0'}}>{title}</h3>
        <div className="muted">Unit price: ${price}</div>
        <div style={{marginTop:'.5rem'}} className="qty">
          <button onClick={() => dispatch(decrement(id))}>-</button>
          <input type="number" min={1} value={quantity} onChange={(e) => dispatch(updateQuantity({ id, quantity: Number(e.target.value) }))} />
          <button onClick={() => dispatch(increment(id))}>+</button>
        </div>
      </div>
      <div style={{display:'grid', gap:'.5rem', justifyItems:'end'}}>
        <div><strong>${(price * quantity).toFixed(2)}</strong></div>
        <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(id))}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number.isRequired
  }).isRequired
};
