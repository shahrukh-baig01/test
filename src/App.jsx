import { useEffect } from 'react'

/* Branded self-contained placeholder (navy→orange gradient). Zero network. */
function Ph({ cap, style }) {
  return (
    <div className="ph" style={style}>
      {cap ? <span className="cap">{cap}</span> : null}
    </div>
  )
}

/* Marquee card: gradient placeholder + label + caption chip. */
function MqCard({ label, cap }) {
  return (
    <div className="mq-card">
      <div className="ph" style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
      <span className="lbl">{label}</span>
      <span className="cap">{cap}</span>
    </div>
  )
}

/* Real Naseeha offerings (from naseeha.live). */
const rowA = [
  ['Islamic Studies & Leadership (AISL)', 'placeholder · AISL cohort'],
  ['Associate of Quranic Studies (AQS)', 'placeholder · AQS, Saturdays'],
  ['Islamic Studies Diploma (ISD)', 'placeholder · ISD class'],
  ['Quranic Arabic Intensive', 'placeholder · Arabic intensive'],
  ["Summer Qur'an Enrichment", 'placeholder · summer program'],
]
const rowB = [
  ['Naseeha X · online courses', 'placeholder · online learning'],
  ['Weekly Spiritual Gathering', 'placeholder · WSG talk'],
  ['The NCCM Project', 'placeholder · NCCM'],
  ['Events & retreats', 'placeholder · Naseeha event'],
  ['Community', 'placeholder · community'],
]
const words = [
  'AISL', 'AQS', 'ISD', 'Quranic Arabic', "Summer Qur'an",
  'Naseeha X', 'Weekly Spiritual Gathering',
]

export default function App() {
  // Nav turns solid past the hero; subtle parallax on the .bg / stacked layers.
  useEffect(() => {
    const nav = document.getElementById('nav')
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const layers = [
      ['heroBg', 0.12], ['heroGlow', 0.06],
      ['bleedBg', 0.1], ['inviteBg', 0.1],
      ['pBack', -0.05], ['pFront', 0.05],
    ]
      .map(([id, f]) => [document.getElementById(id), f])
      .filter(([el]) => el)

    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      if (nav) nav.classList.toggle('solid', y > window.innerHeight * 0.7)
      if (reduce) return
      for (const [el, f] of layers) {
        const sec = el.closest('section, header') || el.parentElement
        const top = sec.getBoundingClientRect().top
        el.style.transform = `translate3d(0, ${(top * f).toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="wrap-wide row">
          <div className="logo">Naseeha</div>
          <div className="links">
            <a href="#courses">Courses</a>
            <a href="#community">Community</a>
            <a href="#about">Who we are</a>
            <a href="#programs">Programs</a>
            <a className="btn btn-primary navcta" href="#invite">Donate</a>
          </div>
          <button className="burger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </nav>

      {/* 1 · HERO */}
      <header className="hero">
        <div className="bg" id="heroBg">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="glow" id="heroGlow"></div>
        <div className="wrap-wide inner">
          <span className="kicker"><span className="pulse"></span> A non-profit Islamic educational institute · DHA, Lahore</span>
          <h1 className="display">Journey to<span className="em">excellence.</span></h1>
          <p className="sub">Naseeha Institute revives Islamic learning and scholarship — bringing the study of the Quran and the Prophetic Sunnah to students and working professionals in an institutionalized setting.</p>
          <div className="cta">
            <a className="btn btn-primary btn-lg" href="#courses">Explore courses <span className="arrow">→</span></a>
            <a className="btn btn-ghost-light btn-lg" href="#community">Weekly gatherings</a>
          </div>
          <p className="micro">AISL · AQS · ISD · Quranic Arabic · Summer Qur'an · Naseeha X online. Registrations open.</p>
        </div>
        <span className="cap">placeholder · Naseeha Institute, DHA Lahore</span>
        <div className="scrollhint">Scroll</div>
      </header>

      {/* 2 · OPENER */}
      <section className="section opener">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: '28px' }}>Reviving Islamic learning</p>
          <h2 className="big">Islamic scholarship, brought back to <span className="o">the masses.</span></h2>
          <p className="lede">A non-profit, non-political educational institute dedicated to the study of the Quran and the Prophetic Sunnah — taught seriously, and made accessible to everyone.</p>
        </div>
      </section>

      {/* 3 · COMMUNITY ENERGY + MARQUEE */}
      <section className="section energy" id="community">
        <div className="wrap-wide">
          <div className="head">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-300)', marginBottom: '16px' }}>What's happening at Naseeha</p>
              <h2 className="h2 measure">A whole community, already in motion.</h2>
            </div>
            <p className="lede">Structured courses and diplomas. Weekly Spiritual Gatherings. Online learning through Naseeha X. Events, the NCCM project and a growing community — on-site in Lahore and online.</p>
          </div>
        </div>

        {/* offering marquee (two rows, opposite directions) */}
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

        {/* word marquee */}
        <div className="wordstrip">
          <div className="ws-row" id="wsRow">
            {[...words, ...words].map((w, i) => (
              <span key={i}>
                <span>{w}</span><span className="dot">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · FULL-BLEED PHOTO BREAK */}
      <section className="bleed">
        <div className="bg" id="bleedBg">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap-wide inner">
          <p className="big">Weekly Spiritual Gatherings — <span className="o">for every walk of life.</span></p>
          <p>A series of talks addressing contemporary issues in the light of the Quran and Sunnah — a platform for people from all backgrounds to understand the basics of Islam.</p>
        </div>
        <span className="cap">placeholder · Weekly Spiritual Gathering</span>
      </section>

      {/* 5 · LAYERED STATEMENT — WHO WE ARE */}
      <section className="section layered">
        <div className="wrap-wide">
          <div className="grid">
            <div className="stack">
              <div className="p-back" id="pBack">
                <Ph cap="placeholder · the campus, DHA" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="p-front" id="pFront">
                <Ph cap="placeholder · a class in session" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="copy">
              <p className="eyebrow" style={{ marginBottom: '20px' }}>Who we are</p>
              <p className="big">A place to study the Quran and Sunnah, <span className="o">seriously.</span></p>
              <p>Naseeha Institute is a non-profit and non-political educational institute dedicated to reviving Islamic learning and scholarship among the masses — in an institutionalized setting built for students and working professionals alike.</p>
              <p style={{ marginTop: '18px' }}><a className="btn btn-ghost btn-lg" href="#about">Who we are <span className="arrow">→</span></a></p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · FIRST STEPS — WAYS IN */}
      <section className="section steps" id="courses">
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
                <p className="meta">DHA, Lahore · registrations open</p>
                <span className="go">See all courses →</span>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · Naseeha X</span></div>
              <div className="body">
                <p className="tag">Learn online</p>
                <h3>Take a Naseeha X course</h3>
                <p>Online courses you can start today and go at your own pace, from anywhere in the world.</p>
                <p className="meta">courses.naseeha.live</p>
                <span className="go">Browse Naseeha X →</span>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · WSG</span></div>
              <div className="body">
                <p className="tag">Come along</p>
                <h3>Join a Weekly Gathering</h3>
                <p>Talks on contemporary issues in the light of the Quran and Sunnah — open to people from every walk of life.</p>
                <p className="meta">Weekly · join the WhatsApp group</p>
                <span className="go">Get involved →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WHY DIFFERENT — ABOUT */}
      <section className="section diff" id="about">
        <div className="wrap-wide">
          <h2 className="h2 measure">Learning with structure and depth.</h2>
          <p className="lede measure" style={{ marginTop: '20px' }}>Naseeha isn't one-off lectures. It's real curricula, taught in an institutionalized setting, tracing everything back to the Quran and the Prophetic Sunnah.</p>
          <div className="grid">
            <div className="item"><div className="idx">i.</div><h3>Institutionalized learning</h3><p>Structured programs and semesters — from a four-year AISL to intensive short courses — not scattered, one-off talks.</p></div>
            <div className="item"><div className="idx">ii.</div><h3>Quran &amp; Sunnah at the core</h3><p>Everything traces back to the Book and the Prophetic Sunnah, taught seriously and made accessible to all.</p></div>
            <div className="item"><div className="idx">iii.</div><h3>Built for real lives</h3><p>Designed for students and working professionals — on-site classes in Lahore and self-paced learning online via Naseeha X.</p></div>
            <div className="item"><div className="idx">iv.</div><h3>Non-profit &amp; transparent</h3><p>A non-profit, non-political foundation reviving Islamic scholarship — with published financial audit reports.</p></div>
          </div>
        </div>
      </section>

      {/* 8 · PROOF — PROGRAMS AT A GLANCE */}
      <section className="section proof" id="programs">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '48px' }}>Programs at a glance</p>
          <div className="row">
            <div className="stat"><div className="n"><span>6</span></div><div className="l">structured courses on offer</div></div>
            <div className="stat"><div className="n">4<span className="o">yr</span></div><div className="l">AISL · 8 semesters</div></div>
            <div className="stat"><div className="n">2<span className="o">×</span></div><div className="l">campuses — DHA &amp; UMT</div></div>
            <div className="stat"><div className="n">100<span className="o">%</span></div><div className="l">non-profit &amp; non-political</div></div>
          </div>
          <p className="note">AISL · AQS · ISD · Quranic Arabic Intensive · Summer Qur'an Enrichment · Naseeha X online</p>
        </div>
      </section>

      {/* 9 · HADITH */}
      <section className="section ayah">
        <div className="wrap">
          <p className="en">“The best of charity is when a Muslim gains knowledge, then teaches it to his brother.”</p>
          <p className="ref">Sunan Ibn Mājah</p>
          <p className="whisper">Knowledge, then shared — that's the mission.</p>
        </div>
      </section>

      {/* 10 · INVITE */}
      <section className="section invite" id="invite">
        <div className="bg" id="inviteBg">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap inner">
          <h2>Begin your journey to <span className="o">excellence.</span></h2>
          <p className="sub">Study, gather, and grow with Naseeha.</p>
          <div className="cta">
            <a className="btn btn-primary btn-lg" href="#courses">Explore courses <span className="arrow">→</span></a>
            <a className="btn btn-ghost-light btn-lg" href="#invite">Donate now</a>
          </div>
        </div>
        <span className="cap">placeholder · Naseeha Institute, DHA</span>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap-wide">
          <div className="top">
            <div>
              <div className="logo">Naseeha</div>
              <p className="tag">A non-profit, non-political Islamic educational institute in Lahore — reviving the study of the Quran and the Sunnah.</p>
              <a className="support" href="#invite">♥ Donate now →</a>
            </div>
            <div><h4>Learn</h4><ul><li><a href="#courses">Courses</a></li><li><a href="#courses">AISL &amp; diplomas</a></li><li><a href="https://courses.naseeha.live">Naseeha X (online)</a></li><li><a href="#community">Weekly Gathering</a></li></ul></div>
            <div><h4>Explore</h4><ul><li><a href="#">The NCCM Project</a></li><li><a href="#community">Events</a></li><li><a href="#community">Community</a></li><li><a href="#">Financial Audit Reports</a></li></ul></div>
            <div><h4>Naseeha</h4><ul><li><a href="#about">Who we are</a></li><li><a href="mailto:info@naseeha.live">Contact</a></li><li><a href="#">Terms &amp; Conditions</a></li><li><a href="#">Privacy Policy</a></li></ul></div>
          </div>
          <div className="legal">
            <span>164-G, Civic Commercial Area, Phase 1 DHA, Lahore · info@naseeha.live · +92 311 6273342</span>
            <span>© 2026 Naseeha Foundation. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
