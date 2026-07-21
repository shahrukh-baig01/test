import { PageHero } from '../lib/primitives'
import CtaBand from '../components/CtaBand'

const REPORTS = [
  ['Audit Report FY 2024–25', 'Naseeha Foundation — Signed', 'https://drive.google.com/file/d/1HeNk-4g8dSX78MAnaD6x72I0sHsFngXP/view?usp=sharing'],
  ['Audit Report FY 2023–24', 'Naseeha Foundation — Signed', 'https://drive.google.com/file/d/1oqB0i0c51NsIbeVGUf2L8AJKcw2LTRzD/view?usp=sharing'],
  ['Audited Accounts FY24', 'Naseeha Foundation — PDF', 'https://naseeha.live/wp-content/uploads/2025/04/Naseeha-Foundation-Audited-Accounts-FY-24.pdf'],
]

export default function FinancialReports() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Financial audit reports."
        sub="As a non-profit, we publish our audited accounts so you can see exactly how your support is used."
        cap="placeholder · Naseeha Foundation"
      />

      <section className="section pullquote">
        <div className="wrap">
          <p className="q">“You are the best nation raised up for humankind. You enjoin righteousness, forbid corruption and you believe in Allah.”</p>
          <p className="ref">Surah Āl-ʿImrān</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap-wide">
          <p className="eyebrow">Audit reports</p>
          <h2 className="h2 measure" style={{ marginTop: '14px', marginBottom: '48px' }}>Signed &amp; audited accounts.</h2>
          <div className="card-grid">
            {REPORTS.map(([title, sub, url]) => (
              <a className="info-card" key={url} href={url} target="_blank" rel="noreferrer">
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">PDF</span></div></div>
                <div className="body">
                  <p className="tag">Audited accounts</p>
                  <h3>{title}</h3>
                  <p>{sub}</p>
                  <span className="go" style={{ marginTop: '18px' }}>Open report →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="note" style={{ marginTop: '40px', color: 'var(--n-400)', fontSize: '14px' }}>
            Naseeha Foundation is a non-profit, non-political educational organization. Legal and tax-status documents are available on request.
          </p>
        </div>
      </section>

      <CtaBand title="Support with confidence" sub="Every contribution is accounted for. Donate to the mission today." />
    </>
  )
}
