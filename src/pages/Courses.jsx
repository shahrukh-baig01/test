import { Link } from 'react-router-dom'
import { PageHero } from '../lib/primitives'
import { COURSES } from '../data/courses'
import { SITE } from '../data/site'
import CtaBand from '../components/CtaBand'

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={<>Study the Quran &amp; Sunnah, <span className="o">seriously.</span></>}
        sub="Structured, on-site programs and online learning — for students, working professionals and beginners. No prior knowledge required."
        cap="placeholder · a class at the Institute"
      />

      <section className="section">
        <div className="wrap-wide">
          <div className="pullquote" style={{ background: 'transparent', border: 0, marginBottom: 'clamp(48px,7vw,88px)', padding: 0 }}>
            <p className="q">“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”</p>
            <p className="ref">Jāmiʿ at-Tirmidhī</p>
          </div>

          <div className="card-grid">
            {COURSES.map((c) => (
              <Link key={c.slug} to={`/courses/${c.slug}`} className="info-card">
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">{c.code}</span></div></div>
                <div className="body">
                  <span className="status">{c.status}</span>
                  <p className="tag">{c.tagline}</p>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <p className="meta"><span>{c.format}</span><span>{c.duration}</span><span>{c.fee}</span></p>
                  <span className="go">View details →</span>
                </div>
              </Link>
            ))}

            <a className="info-card" href={SITE.naseehaX} target="_blank" rel="noreferrer">
              <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">Naseeha X</span></div></div>
              <div className="body">
                <span className="status">Online · self-paced</span>
                <p className="tag">Learn from anywhere</p>
                <h3>Naseeha X — Online Courses</h3>
                <p>Bite-size online courses you can start today and complete at your own pace, wherever you are in the world.</p>
                <p className="meta"><span>Online</span><span>Self-paced</span></p>
                <span className="go">Go to courses.naseeha.live →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure where to start?" sub="Reach out and we'll help you find the right program." />
    </>
  )
}
