import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectCartCount } from '../redux/cartSlice.js';
import { data } from '../utils/ShoppyGloble.js';

export default function Header(){
  const count = useSelector(selectCartCount);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/"><img src={data.image} alt="ShoppyGlobe" /></Link>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart <span className="badge" aria-hidden="true">{count}</span></Link>
          <Link to="/checkout">Checkout</Link>
        </nav>

        <button className="mobile-toggle" aria-expanded={open} onClick={() => setOpen(prev => !prev)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="mobile-menu container" role="menu">
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Cart ({count})</Link>
          <Link to="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
        </div>
      )}
    </header>
  );
}
