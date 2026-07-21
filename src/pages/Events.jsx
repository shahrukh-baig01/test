import { PageHero } from '../lib/primitives'
import CtaBand from '../components/CtaBand'

const EVENTS = [
  ['Anwar al-Tafsir — Surah Al-Qasas', 'July 16, 2026', 'https://naseeha.live/events/anwar-al-tafsir-surah-al-qasas/'],
  ['Why Is It Never Enough?', 'July 15, 2026', 'https://naseeha.live/events/enough/'],
  ['Quran Intensive — Surah Yā Sīn', 'July 10, 2026', 'https://naseeha.live/events/surahyasin/'],
  ['Maktab — Seerah Level 1: Beginning of the Revelation', 'June 28, 2026', 'https://naseeha.live/events/maktabseerah/'],
  ['Legacy Summer Camp 2026', 'June 18, 2026', 'https://naseeha.live/events/summercamp/'],
]

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events."
        sub="Lectures, workshops, retreats and community gatherings — find your next experience with Naseeha Foundation."
        cap="placeholder · a Naseeha event"
      />

      <section className="section">
        <div className="wrap-wide">
          <div className="card-grid">
            {EVENTS.map(([title, date, url]) => (
              <a className="info-card" key={url} href={url} target="_blank" rel="noreferrer">
                <div className="pic"><div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }}><span className="cap">{date}</span></div></div>
                <div className="body">
                  <p className="tag">{date}</p>
                  <h3>{title}</h3>
                  <span className="go" style={{ marginTop: '18px' }}>View details →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Never miss a gathering" sub="Join our WhatsApp announcement group for the latest events." />
    </>
  )
}
