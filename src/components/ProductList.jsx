import { useMemo, useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts.js';
import ProductItem from './ProductItem.jsx';

export default function ProductList(){
  const { data, loading, error, refetch } = useFetchProducts();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(p => p.title.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)));
  }, [data, query]);

  return (
    <main className="container" aria-live="polite">
      <div className="toolbar">
        <div className="search" role="search">
          <input placeholder="Search products by title, brand, or category…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search products" />
          <button className="btn" onClick={() => setQuery('')}>Clear</button>
        </div>
        <div className="muted">{filtered.length} / {data.length || 0} products</div>
      </div>

      {loading && <p>Loading products…</p>}
      {error && <div role="alert" style={{color:'#fca5a5',display:'flex',gap:'.75rem',alignItems:'center'}}><span>Error: {error}</span><button className="btn" onClick={refetch}>Retry</button></div>}

      {!loading && !error && (
        <section className="grid" aria-label="Products">
          {filtered.map(p => <ProductItem key={p.id} product={p} />)}
        </section>
      )}
    </main>
  );
}
