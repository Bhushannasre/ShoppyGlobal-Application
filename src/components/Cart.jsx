import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../redux/cartSlice.js';
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{display:'grid', gap:'1rem'}}>
      <h1 className='cart-heading'>Cart</h1>
      {!items.length && (
        <div className="empty">
          <p className='mb-3'>Your cart is empty.</p>
          <h4><Link className="btn" to="/" >Browse products</Link></h4>
        </div>
      )}
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {items.length > 0 && (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <button className="btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
            <div>Total: <strong>${total.toFixed(2)}</strong></div>
            <Link className="btn btn-primary" to="/checkout">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
