import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <div className="container" style={{textAlign:'center', padding:'3rem 0'}}>
      <h1>404</h1>
      <p className="muted">The page you are looking for does not exist.</p>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  );
}
