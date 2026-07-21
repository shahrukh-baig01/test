import { useParams, Link } from 'react-router-dom'
import { COURSE_BY_SLUG } from '../data/courses'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'

export default function CourseDetail() {
  const { slug } = useParams()
  const c = COURSE_BY_SLUG[slug]
  if (!c) return <NotFound />

  return (
    <>
      <header className="page-hero">
        <div className="bg" data-parallax="0.12">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap-wide inner">
          <p className="eyebrow">{c.code} · {c.status}</p>
          <h1>{c.title}</h1>
          <p className="sub">{c.tagline}</p>
          <div className="course-hero-meta">
            <span className="chip">{c.format}</span>
            <span className="chip">{c.duration}</span>
            <span className="chip">{c.fee}</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap-wide">
          <Link className="backlink" to="/courses">← All courses</Link>
          <div className="detail-grid">
            <div>
              <h2 className="h2" style={{ fontSize: 'clamp(1.8rem,3.4vw,2.6rem)' }}>Overview</h2>
              <p className="lede" style={{ marginTop: '18px' }}>{c.overview}</p>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy-900)', margin: '44px 0 8px', letterSpacing: '-.02em' }}>What you'll study</h3>
              <ul className="syllabus">
                {c.curriculum.map((m, i) => (
                  <li key={i}><span className="num">{String(i + 1).padStart(2, '0')}</span><span>{m}</span></li>
                ))}
              </ul>
            </div>

            <aside>
              <div className="factbox">
                <h4>Course details</h4>
                <dl>
                  <dt>Format</dt><dd>{c.format}</dd>
                  <dt>Schedule</dt><dd>{c.schedule}</dd>
                  <dt>Duration</dt><dd>{c.duration}</dd>
                  <dt>Fee</dt><dd>{c.fee}</dd>
                  <dt>Eligibility</dt><dd>{c.eligibility}</dd>
                  <dt>Location</dt><dd>{c.location}</dd>
                  {c.start ? (<><dt>Intake</dt><dd>{c.start}</dd></>) : null}
                </dl>
                <a className="btn btn-primary" href={c.enroll} target="_blank" rel="noreferrer">Enroll in course <span className="arrow">→</span></a>
                {c.prospectus ? (
                  <a className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }} href={c.prospectus} target="_blank" rel="noreferrer">Download prospectus</a>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to enroll?" sub="Seats are limited and filled first come, first served." />
    </>
  )
}
