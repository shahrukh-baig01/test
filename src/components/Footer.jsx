import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap-wide">
        <div className="top">
          <div>
            <div className="logo">Naseeha</div>
            <p className="tag">A non-profit, non-political Islamic educational institute in Lahore — reviving the study of the Quran and the Prophetic Sunnah among students and working professionals.</p>
            <a className="support" href={SITE.donate} target="_blank" rel="noreferrer">♥ Donate now →</a>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px' }}>
              {Object.entries(SITE.socials).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>
              ))}
            </div>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li><Link to="/courses">All courses</Link></li>
              <li><Link to="/courses/aisl">AISL</Link></li>
              <li><Link to="/courses/aqs">AQS</Link></li>
              <li><Link to="/courses/isd">ISD</Link></li>
              <li><a href={SITE.naseehaX} target="_blank" rel="noreferrer">Naseeha X (online)</a></li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/nccm">The NCCM Project</Link></li>
              <li><Link to="/financial-reports">Financial Audit Reports</Link></li>
            </ul>
          </div>
          <div>
            <h4>Naseeha</h4>
            <ul>
              <li><Link to="/who-we-are">Who we are</Link></li>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>{SITE.address} · {SITE.email} · {SITE.phone}</span>
          <span>© 2026 Naseeha Foundation. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
