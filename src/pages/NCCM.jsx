import { PageHero } from '../lib/primitives'
import { SITE } from '../data/site'

const DETAILS = [
  ['Mosque', 'A two-story mosque for 700+ namāzīs and 150+ iʿtikāf observers — hosting monthly and Ramadan iʿtikāf nights and Hifz programs for all ages. The neighbourhood will benefit too.'],
  ['Auditorium', 'A 200+ capacity auditorium for workshops and seminars, with a mezzanine gallery allowing separate seating and entrances for women.'],
  ['Horseshoe Theatres', 'For the Islamic Executive Development Program’s case-method teaching — interactive theatres where students engage with the teacher and one another.'],
  ['Outdoor Recreational Areas', 'Space for regular workshops targeting kids and families, with sports and activities to engage children and enrolled students.'],
]

const STATS = [
  ['25,000', 'sqft campus'],
  ['700+', 'namāzī capacity'],
  ['150+', 'iʿtikāf observers'],
  ['200+', 'auditorium seats'],
]

export default function NCCM() {
  return (
    <>
      <PageHero
        eyebrow="The NCCM Project"
        title="A campus built for the mission."
        sub="A 25,000 sqft campus with state-of-the-art, media- and tech-equipped classrooms, theatres, an auditorium and a mosque."
        cap="placeholder · NCCM campus render"
      />

      <section className="section proof">
        <div className="wrap">
          <div className="row">
            {STATS.map(([n, l]) => (
              <div className="stat" key={l}><div className="n">{n}</div><div className="l">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap-wide">
          <p className="eyebrow">Project details</p>
          <h2 className="h2 measure" style={{ marginTop: '14px', marginBottom: '48px' }}>What we're building.</h2>
          <div className="card-grid two">
            {DETAILS.map(([title, body]) => (
              <div className="info-card" key={title}>
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">placeholder · {title}</span></div></div>
                <div className="body">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation / bank details */}
      <section className="section dark">
        <div className="wrap">
          <p className="eyebrow" style={{ color: 'var(--gold-300)' }}>Support the campus</p>
          <h2 className="h2 measure" style={{ marginTop: '16px' }}>Help build a home for the mission.</h2>
          <div className="factbox" style={{ marginTop: '36px', maxWidth: '520px', color: 'var(--n-700)' }}>
            <h4>Bank account details</h4>
            <dl>
              <dt>Bank</dt><dd>Bank Islami</dd>
              <dt>Account title</dt><dd>NASEEHA FOUNDATION</dd>
              <dt>Account no.</dt><dd>209639332960001</dd>
              <dt>IBAN</dt><dd>PK64BKIP0209639332960001</dd>
            </dl>
            <p style={{ marginTop: '18px', fontSize: '13.5px', color: 'var(--n-500)', lineHeight: 1.5 }}>
              Please share a screenshot of your donation for record purposes at +92 321 1115881.
            </p>
            <a className="btn btn-primary" href={SITE.donate} target="_blank" rel="noreferrer">Donate online <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  )
}
