import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice.js';

export default function ProductDetail(){
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => { if (!r.ok) throw new Error('Failed to fetch product detail'); return r.json(); })
      .then((json) => { if (!active) return; setData(json); setError(null); })
      .catch((err) => { if (!active) return; setError(err.message || 'Unknown error'); setData(null); })
      .finally(() => active && setLoading(false));

    return () => { active = false; };
  }, [id]);

  if (loading) return <div className="container"><p>Loading product…</p></div>;
  if (error) return <div className="container"><p role="alert" style={{color:'#fca5a5'}}>Error: {error}</p></div>;
  if (!data) return <div className="container"><p>Not found.</p></div>;

  return (
    <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
      <div>
        <img src={data.thumbnail} alt={data.title} style={{width:'100%', borderRadius:'1rem', border:'1px solid #1f2937'}} />
        <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'.5rem', marginTop:'.5rem'}}>
          {data.images?.slice(0,5).map((src, idx) => (
            <img key={idx} src={src} alt={`alt-${idx}`} style={{width:'100%', height:70, objectFit:'cover', borderRadius:'.5rem'}} />
          ))}
        </div>
      </div>
      <div style={{display:'grid', gap:'.75rem'}}>
        <h1 style={{margin:0}}>{data.title}</h1>
        <p className="muted" style={{margin:0}}>{data.brand} · {data.category}</p>
        <div className="price" style={{fontSize:'1.25rem'}}>${data.price}</div>
        <p>{data.description}</p>
        <div style={{display:'flex', gap:'.5rem'}}>
          <button className="btn btn-primary" onClick={() => dispatch(addToCart(data))} style={{width:'150px', height:'40px'}}>Add to Cart</button>
          <Link className="btn btn-danger" to="/cart" style={{width:'130px', height:'40px',background:'blue'}}>Go to Cart</Link>
        </div>
        <div className="muted">Rating: {data.rating} · Stock: {data.stock}</div>
      </div>
    </div>
  );
}
