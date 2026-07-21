import { PageHero } from '../lib/primitives'
import { SITE } from '../data/site'
import CtaBand from '../components/CtaBand'

const PROGRAMS = [
  {
    status: 'Open to public',
    tag: 'Every Tue & Wed',
    title: 'Weekly Spiritual Gathering',
    body: 'Amidst the challenges of the modern world, join us every week to nurture our connection with Allah ﷻ, discover the Prophetic ways, and purify the heart from spiritual diseases.',
    meta: ['DHA Phase 3 & Wapda Town'],
  },
  {
    status: 'Registrations open',
    tag: 'Every summer · 3 days',
    title: 'Change — Towards Purpose',
    body: 'A journey of a lifetime. With a focus on recreation and spiritual upliftment, the trip includes leadership-based outdoor activities and lessons from the Prophetic model of leadership.',
    meta: ['Northern Areas', '3 days'],
  },
  {
    status: 'Open to public',
    tag: 'Every Sunday',
    title: 'Naseeha Kids Club',
    body: 'Helping children build their connection with Allah through the Quran & Sunnah in a fun, nurturing environment.',
    meta: ['Naseeha Academic Center'],
  },
]

const EXPLORE = ['Naseeha Football Club', 'Sacred Hours', 'Footsteps']

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={<>Learn the classical traditions in a <span className="o">contemporary setting.</span></>}
        sub="Giving our educated population a platform to learn the classical traditions of Islam in a contemporary setting — gatherings, retreats and programs for every age."
        cap="placeholder · community gathering"
      />

      <section className="section">
        <div className="wrap-wide">
          <p className="eyebrow">Our programs</p>
          <h2 className="h2 measure" style={{ marginTop: '14px', marginBottom: '48px' }}>Something for everyone, every week.</h2>
          <div className="card-grid">
            {PROGRAMS.map((p) => (
              <div className="info-card" key={p.title}>
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">placeholder · {p.title}</span></div></div>
                <div className="body">
                  <span className="status">{p.status}</span>
                  <p className="tag">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className="meta">{p.meta.map((m) => <span key={m}>{m}</span>)}</p>
                  <a className="go" href={SITE.whatsappGroup} target="_blank" rel="noreferrer">Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap-wide">
          <p className="eyebrow">Explore our community</p>
          <h2 className="h2 measure" style={{ marginTop: '14px', marginBottom: '40px' }}>More ways to belong.</h2>
          <div className="card-grid">
            {EXPLORE.map((name) => (
              <div className="info-card" key={name}>
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">placeholder · {name}</span></div></div>
                <div className="body">
                  <h3>{name}</h3>
                  <p>A Naseeha community initiative.</p>
                  <a className="go" href={SITE.whatsappGroup} target="_blank" rel="noreferrer">Stay connected →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come as you are" sub="Join a gathering, or stay connected through our WhatsApp group." />
    </>
  )
}
