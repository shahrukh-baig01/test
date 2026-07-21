import { PageHero } from '../lib/primitives'
import CtaBand from '../components/CtaBand'

const PILLARS = [
  ['i.', 'Reclaiming the Narrative', 'Restoring an authentic understanding of Islam, rooted in the Quran and the Prophetic Sunnah.'],
  ['ii.', 'Inspiring Contributions', "Nurturing Muslims who contribute meaningfully to society as principled leaders and du'āt."],
  ['iii.', 'Addressing Contemporary Issues', 'Engaging honestly and seriously with the questions and challenges of modern life.'],
]

const FACULTY = [
  ['Arsalan Ahmed', 'Co-Founder & Ustaad'],
  ['Moeen Mahmood', 'Co-Founder & Ustaad'],
  ['Yasin Asad', 'Co-Founder & Ustaad'],
  ['Muhammad Abu Bakr', 'Co-Founder & Speaker'],
  ['Mufti Ahklaq', 'Ustaad'],
  ['Mufti Ansar', 'Ustaad'],
  ['Qari Ihsan', 'Ustaad'],
  ['Ahmed Qadri', 'Ustaad & Speaker'],
  ['Abdul Qadeer Khan', 'Ustaad'],
  ['Hassaan Sadiq', 'Ustaad'],
  ['Abdulrehman Jami', 'Ustaad'],
  ['Maulana Shujja Waqar', 'Ustaad'],
  ['Mufti Atta Al Rehman', 'Ustaad'],
  ['Saad Tariq', 'Ustaad'],
  ['Rasheed Arshad', 'Ustaad'],
  ['Abdul Majeed', 'Ustaad'],
  ['Mufti Qasim', 'Ustaad'],
  ['Zubair Anees', 'Ustaad'],
  ['Harris Khan', 'Ustaad'],
]

const initials = (name) => name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('')

export default function WhoWeAre() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Journey to excellence."
        sub="Naseeha Foundation is a non-profit and non-political educational organization reviving Islamic learning and scholarship among the masses."
        cap="placeholder · Naseeha Institute, DHA Lahore"
      />

      {/* Verse */}
      <section className="section pullquote">
        <div className="wrap">
          <p className="q">“You are the best nation raised up for humankind. You enjoin righteousness, forbid corruption and you believe in Allah.”</p>
          <p className="ref">Surah Āl-ʿImrān</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="wrap-wide">
          <p className="eyebrow">Our mission</p>
          <h2 className="h2 measure" style={{ marginTop: '14px' }}>Bringing the Quran and Sunnah into an institutionalized setting.</h2>
          <div className="pillars">
            {PILLARS.map(([idx, title, body]) => (
              <div className="pillar" key={title}>
                <div className="idx">{idx}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section tint">
        <div className="wrap-wide">
          <p className="eyebrow">Our faculty</p>
          <h2 className="h2 measure" style={{ marginTop: '14px' }}>Islamic leaders who serve on a volunteer basis.</h2>
          <p className="lede measure" style={{ marginTop: '18px' }}>Meet the team working to uplift the Muslim community and instill the true values of Islam in the modern Muslim.</p>
          <div className="team-grid">
            {FACULTY.map(([name, role]) => (
              <div className="member" key={name}>
                <div className="av">{initials(name)}</div>
                <div>
                  <div className="nm">{name}</div>
                  <div className="rl">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section dark">
        <div className="wrap">
          <p className="eyebrow" style={{ color: 'var(--gold-300)' }}>About Naseeha</p>
          <h2 className="h2 measure" style={{ marginTop: '16px' }}>Reviving Islamic learning and scholarship among the masses.</h2>
          <p className="lede" style={{ marginTop: '20px', maxWidth: '64ch' }}>Naseeha Foundation is a non-profit and non-political educational organization dedicated to reviving Islamic learning and scholarship among the masses by bringing the study of the Quran and the Prophetic Sunnah to students and working professionals in an institutionalized setting.</p>
        </div>
      </section>

      <CtaBand title="Join us on the journey" sub="Study, gather, and grow with the Naseeha community." />
    </>
  )
}
