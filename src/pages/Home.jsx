import { Link } from 'react-router-dom'
import { Ph, MqCard } from '../lib/primitives'
import { SITE } from '../data/site'

const rowA = [
  ['AISL — Leadership', 'placeholder · AISL cohort'],
  ['AQS — Quranic Studies', 'placeholder · AQS, Saturdays'],
  ['ISD — Diploma', 'placeholder · ISD class'],
  ['Quranic Arabic Intensive', 'placeholder · Arabic intensive'],
  ["Summer Qur'an", 'placeholder · summer program'],
]
const rowB = [
  ['Weekly Spiritual Gathering', 'placeholder · WSG talk'],
  ['Naseeha X · online', 'placeholder · online learning'],
  ['Change · retreat', 'placeholder · Northern Areas'],
  ['Naseeha Kids Club', 'placeholder · kids club'],
  ['The NCCM campus', 'placeholder · NCCM'],
]
const words = ['AISL', 'AQS', 'ISD', 'Quranic Arabic', "Summer Qur'an", 'Naseeha X', 'Weekly Spiritual Gathering', 'Change']

export default function Home() {
  return (
    <>
      {/* 1 · HERO */}
      <header className="hero">
        <div className="bg" data-parallax="0.12">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="glow" data-parallax="0.06"></div>
        <div className="wrap-wide inner">
          <span className="kicker"><span className="pulse"></span> A non-profit Islamic educational institute · DHA, Lahore</span>
          <h1 className="display">Belong first.<span className="em">The rest follows.</span></h1>
          <p className="sub">Before the rules, before the labels — there's a community that gets it. Naseeha is where students and working professionals find their people, then study the Quran and Sunnah in earnest. Come exactly as you are.</p>
          <div className="cta">
            <Link className="btn btn-primary btn-lg" to="/courses">Explore courses <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost-light btn-lg" to="/community">See what a week looks like</Link>
          </div>
          <p className="micro">On-site in Lahore &amp; online via Naseeha X · weekly gatherings · registrations open. Come as you are.</p>
        </div>
        <span className="cap">placeholder · a Weekly Spiritual Gathering, Lahore</span>
        <div className="scrollhint">Scroll</div>
      </header>

      {/* 2 · OPENER */}
      <section className="section opener">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: '28px' }}>You don't have to have it figured out</p>
          <h2 className="big">Most people don't walk in <span className="o">believing.</span> They walk in <span className="o">belonging.</span></h2>
          <p className="lede">Conviction grows in a room where you feel safe — not from a lecture you sat through alone. So we start with the part that's easy: showing up, and being welcome.</p>
        </div>
      </section>

      {/* 3 · COMMUNITY ENERGY + MARQUEE */}
      <section className="section energy" id="community-preview">
        <div className="wrap-wide">
          <div className="head">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-300)', marginBottom: '16px' }}>This is what a week feels like</p>
              <h2 className="h2 measure">A whole community, already in motion.</h2>
            </div>
            <p className="lede">Structured courses and diplomas. Weekly Spiritual Gatherings. Retreats up north. Online learning through Naseeha X. It's warmer, closer and more alive than you'd expect.</p>
          </div>
        </div>

        <div className="marquee">
          <div className="mq-track">
            <div className="mq-row" id="mqA">
              {[...rowA, ...rowA].map(([label, cap], i) => <MqCard key={`a${i}`} label={label} cap={cap} />)}
            </div>
          </div>
          <div className="mq-track">
            <div className="mq-row" id="mqB">
              {[...rowB, ...rowB].map(([label, cap], i) => <MqCard key={`b${i}`} label={label} cap={cap} />)}
            </div>
          </div>
        </div>

        <div className="wordstrip">
          <div className="ws-row" id="wsRow">
            {[...words, ...words].map((w, i) => (
              <span key={i}><span>{w}</span><span className="dot">·</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · FULL-BLEED BREAK */}
      <section className="bleed">
        <div className="bg" data-parallax="0.1">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap-wide inner">
          <p className="big">The first time, you just <span className="o">sit and listen.</span> By the third, someone saves you a seat.</p>
          <p>That's how it starts for most people — no commitment, no quiz, no pressure. You come once to see what it feels like, and the community does the rest.</p>
        </div>
        <span className="cap">placeholder · the circle, after class</span>
      </section>

      {/* 5 · LAYERED STATEMENT */}
      <section className="section layered">
        <div className="wrap-wide">
          <div className="grid">
            <div className="stack">
              <div className="p-back" data-parallax="-0.05">
                <Ph cap="placeholder · the room" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="p-front" data-parallax="0.05">
                <Ph cap="placeholder · a new face, welcomed" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="copy">
              <p className="eyebrow" style={{ marginBottom: '20px' }}>Come as you are</p>
              <p className="big">No one's keeping score of how <span className="o">practicing</span> you are.</p>
              <p>Maybe it's been a while. Maybe the mosque never quite felt like yours. Maybe you carry more questions than answers. That's exactly who we built this for — roots before rules, belonging before behaviour.</p>
              <p style={{ marginTop: '18px' }}><Link className="btn btn-ghost btn-lg" to="/who-we-are">Who we are <span className="arrow">→</span></Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · WAYS IN */}
      <section className="section steps">
        <div className="wrap-wide">
          <div className="head">
            <p className="eyebrow">Ways to begin</p>
            <h2 className="h2 measure">Pick one. There's a place for everyone.</h2>
          </div>
          <div className="doors">
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · on-site class</span></div>
              <div className="body">
                <p className="tag">Enroll on-site</p>
                <h3>Study at the Institute</h3>
                <p>Structured, on-site programs — AISL, AQS, ISD, Quranic Arabic and more — for students and working professionals.</p>
                <p className="meta">DHA &amp; UMT, Lahore · registrations open</p>
                <Link className="go" to="/courses">See all courses →</Link>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · Naseeha X</span></div>
              <div className="body">
                <p className="tag">Learn online</p>
                <h3>Take a Naseeha X course</h3>
                <p>Online courses you can start today and go at your own pace, from anywhere in the world.</p>
                <p className="meta">courses.naseeha.live</p>
                <a className="go" href={SITE.naseehaX} target="_blank" rel="noreferrer">Browse Naseeha X →</a>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · WSG</span></div>
              <div className="body">
                <p className="tag">Come along</p>
                <h3>Join a Weekly Gathering</h3>
                <p>Talks on contemporary issues in the light of the Quran and Sunnah — open to people from every walk of life.</p>
                <p className="meta">Tue &amp; Wed · DHA Phase 3 &amp; Wapda Town</p>
                <Link className="go" to="/community">Get involved →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WHY DIFFERENT */}
      <section className="section diff">
        <div className="wrap-wide">
          <h2 className="h2 measure">We're not here to lecture you.</h2>
          <p className="lede measure" style={{ marginTop: '20px' }}>Naseeha revives Islamic learning through community, not guilt — classical scholarship taught seriously, and made accessible to the masses.</p>
          <div className="grid">
            <div className="item"><div className="idx">i.</div><h3>Belonging before behaviour</h3><p>You're welcome before you've changed anything. We start with who you are, not a checklist of what you're missing.</p></div>
            <div className="item"><div className="idx">ii.</div><h3>People who get your life</h3><p>Volunteer scholars with one foot in the modern world and one in classical scholarship. Nothing you ask will surprise them.</p></div>
            <div className="item"><div className="idx">iii.</div><h3>Start anywhere</h3><p>No prior knowledge. No Arabic required. Programs are built for beginners, students and working professionals alike.</p></div>
            <div className="item"><div className="idx">iv.</div><h3>Structured &amp; serious</h3><p>Real curricula and semesters, tracing everything back to the Quran and the Prophetic Sunnah — not scattered, one-off talks.</p></div>
          </div>
        </div>
      </section>

      {/* 8 · PROOF */}
      <section className="section proof">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '48px' }}>A community that's actually showing up</p>
          <div className="row">
            <div className="stat"><div className="n"><span>5</span></div><div className="l">structured on-site courses (+ Naseeha X online)</div></div>
            <div className="stat"><div className="n">4<span className="o">yr</span></div><div className="l">flagship AISL · 8 semesters</div></div>
            <div className="stat"><div className="n">19<span className="o">+</span></div><div className="l">volunteer scholars &amp; teachers</div></div>
            <div className="stat"><div className="n">100<span className="o">%</span></div><div className="l">non-profit &amp; non-political</div></div>
          </div>
          <p className="note">AISL · AQS · ISD · Quranic Arabic Intensive · Summer Qur'an Enrichment · Naseeha X online</p>
        </div>
      </section>

      {/* 9 · AYAH */}
      <section className="section ayah">
        <div className="wrap">
          <p className="ar">يُرِيدُ ٱللَّهُ بِكُمُ ٱلْيُسْرَ وَلَا يُرِيدُ بِكُمُ ٱلْعُسْرَ</p>
          <p className="en">“Allah intends for you ease, and does not intend for you hardship.”</p>
          <p className="ref">Al-Baqarah · 2:185</p>
          <p className="whisper">Faith was never meant to be heavy.</p>
        </div>
      </section>

      {/* 10 · INVITE */}
      <section className="section invite">
        <div className="bg" data-parallax="0.1">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap inner">
          <h2>Your people are <span className="o">already here.</span></h2>
          <p className="sub">Belong first. The rest follows.</p>
          <div className="cta">
            <Link className="btn btn-primary btn-lg" to="/courses">Explore courses <span className="arrow">→</span></Link>
            <a className="btn btn-ghost-light btn-lg" href={SITE.donate} target="_blank" rel="noreferrer">Donate now</a>
          </div>
        </div>
        <span className="cap">placeholder · the room fills up</span>
      </section>
    </>
  )
}
