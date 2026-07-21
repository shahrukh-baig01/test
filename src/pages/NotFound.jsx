import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="nf">
      <p className="eyebrow">404</p>
      <h1 className="h2" style={{ maxWidth: '18ch' }}>We couldn't find that page.</h1>
      <p className="lede" style={{ maxWidth: '48ch' }}>The page may have moved. Let's get you back on the path.</p>
      <Link className="btn btn-primary btn-lg" to="/">Back to home <span className="arrow">→</span></Link>
    </div>
  )
}
