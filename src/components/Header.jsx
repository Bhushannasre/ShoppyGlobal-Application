import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectCartCount } from '../redux/cartSlice.js';
import { data } from '../utils/ShoppyGloble.js';
import { IoIosHome } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";


export default function Header(){
  const count = useSelector(selectCartCount);
  const [open, setOpen] = useState(false);

  return (
    
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/"><img src={data.image} alt="ShoppyGlobe" style={{ marginRight: "8px" }}/>ShoopyGloble</Link>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <Link to="/home"><IoIosHome />Home</Link>
          <Link to="/cart"><FaCartArrowDown />Cart <span className="badge" aria-hidden="true">{count}</span></Link>
          <Link to="/checkout"><IoBagCheckOutline />Checkout</Link>
        </nav>

        <button className="mobile-toggle" aria-expanded={open} onClick={() => setOpen(prev => !prev)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="mobile-menu container" role="menu ">
          <Link to="/home" onClick={() => setOpen(false)} ><IoIosHome />Home</Link>
          <Link to="/cart" onClick={() => setOpen(false)}><FaCartArrowDown />Cart ({count})</Link>
          <Link to="/checkout" onClick={() => setOpen(false)}><IoBagCheckOutline />Checkout</Link>
        </div>
      )}
    </header>
  );
}
