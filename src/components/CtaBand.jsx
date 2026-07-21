import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export default function CtaBand({
  title = 'Begin your journey with Naseeha',
  sub = 'Study, gather, and grow — on-site in Lahore or online.',
}) {
  return (
    <section className="section invite">
      <div className="bg" data-parallax="0.1">
        <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
      </div>
      <div className="wrap inner">
        <h2>{title}</h2>
        <p className="sub">{sub}</p>
        <div className="cta">
          <Link className="btn btn-primary btn-lg" to="/courses">Explore courses <span className="arrow">→</span></Link>
          <a className="btn btn-ghost-light btn-lg" href={SITE.donate} target="_blank" rel="noreferrer">Donate now</a>
        </div>
      </div>
      <span className="cap">placeholder · Naseeha Institute, DHA</span>
    </section>
  )
}
