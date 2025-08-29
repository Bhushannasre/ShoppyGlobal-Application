import { useEffect, useRef, useState } from 'react';

/*
  Custom hook to fetch product list with abort support + refetch.
*/
export default function useFetchProducts(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const load = () => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;
    setLoading(true);
    fetch('https://dummyjson.com/products?limit=100', { signal })
      .then(r => { if(!r.ok) throw new Error('Failed to fetch'); return r.json(); })
      .then(json => { setData(Array.isArray(json.products) ? json.products : []); setError(null); })
      .catch(err => { if (err.name !== 'AbortError') { setError(err.message || 'Unknown error'); setData([]); } })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    return () => controllerRef.current?.abort();
  }, []);

  return { data, loading, error, refetch: load };
}
