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

const rowA = [
  ['Weekly gatherings', 'placeholder · weekly gathering'],
  ['Retreats & camps', 'placeholder · retreat'],
  ['The Institute', 'placeholder · AISL class'],
  ['Quest · for teens', 'placeholder · teens'],
  ['31 campuses', 'placeholder · campus'],
]
const rowB = [
  ["Malja · women's wing", 'placeholder · Malja'],
  ['NaseehaX · online', 'placeholder · NaseehaX'],
  ['140+ events a year', 'placeholder · event'],
  ['Food & friends', 'placeholder · after gathering'],
  ['Open questions', 'placeholder · talk'],
]
const words = [
  'Weekly gatherings', 'NaseehaX courses', 'Quest for teens',
  'The Institute', 'Malja for women', 'Retreats & camps',
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
            <a href="#energy">Community</a>
            <a href="#steps">Start</a>
            <a href="#diff">Why us</a>
            <a href="#proof">Programs</a>
            <a className="btn btn-primary navcta" href="#steps">Find your people</a>
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
          <span className="kicker"><span className="pulse"></span> A community for young Muslims · Lahore &amp; online</span>
          <h1 className="display">Belong first.<span className="em">The rest follows.</span></h1>
          <p className="sub">Before the rules, before the labels — there's a room full of people who get it. Naseeha is where young Pakistani Muslims find their people, then find their way. Come exactly as you are.</p>
          <div className="cta">
            <a className="btn btn-primary btn-lg" href="#steps">Find your people <span className="arrow">→</span></a>
            <a className="btn btn-ghost-light btn-lg" href="#energy">See what a week looks like</a>
          </div>
          <p className="micro">Free weekly gatherings · 31 campuses · 175,000+ online. No sign-up. No judgment.</p>
        </div>
        <span className="cap">placeholder · a Tuesday-night gathering, Lahore</span>
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
      <section className="section energy" id="energy">
        <div className="wrap-wide">
          <div className="head">
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-300)', marginBottom: '16px' }}>This is what a week feels like</p>
              <h2 className="h2 measure">A whole community, already in motion.</h2>
            </div>
            <p className="lede">Circles after class. Camps in the mountains. A thread you scroll at 1am. Friends who text back. It's louder, warmer and closer than you'd expect.</p>
          </div>
        </div>

        {/* image marquee (two rows, opposite directions) */}
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
          <p className="big">The first time, you just <span className="o">sit and listen.</span> By the third, someone saves you a seat.</p>
          <p>That's how it starts for most people — no commitment, no quiz, no pressure. You come once to see what it feels like, and the room does the rest.</p>
        </div>
        <span className="cap">placeholder · the circle, after class</span>
      </section>

      {/* 5 · LAYERED PARALLAX STATEMENT */}
      <section className="section layered">
        <div className="wrap-wide">
          <div className="grid">
            <div className="stack">
              <div className="p-back" id="pBack">
                <Ph cap="placeholder · the room" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="p-front" id="pFront">
                <Ph cap="placeholder · a new face, welcomed" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="copy">
              <p className="eyebrow" style={{ marginBottom: '20px' }}>Come as you are</p>
              <p className="big">No one's keeping score of how <span className="o">practicing</span> you are.</p>
              <p>Maybe it's been a while. Maybe the mosque never quite felt like yours. Maybe you carry more questions than answers. That's exactly who we built this for — roots before rules, belonging before behavior.</p>
              <p style={{ marginTop: '18px' }}><a className="btn btn-ghost btn-lg" href="#steps">Take one small step <span className="arrow">→</span></a></p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · FIRST STEPS */}
      <section className="section steps" id="steps">
        <div className="wrap-wide">
          <div className="head">
            <p className="eyebrow">Easy first steps</p>
            <h2 className="h2 measure">Pick one. There's no wrong door.</h2>
          </div>
          <div className="doors">
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · weekly circle</span></div>
              <div className="body">
                <p className="tag">Come this week</p>
                <h3>Walk into a gathering</h3>
                <p>Drop in to a free weekly circle. No sign-up, no dress code, no quiz. Just show up and sit with people who get it.</p>
                <p className="meta">Lahore · every Tue &amp; Wed · free</p>
                <span className="go">Find one near me →</span>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · NaseehaX</span></div>
              <div className="body">
                <p className="tag">Start online, today</p>
                <h3>Take a short course</h3>
                <p>Bite-size courses built for total beginners. No prior knowledge, no Arabic, no pressure. Go at your own pace, from anywhere.</p>
                <p className="meta">4.9/5 · 500+ learners · 10+ courses</p>
                <span className="go">Browse courses →</span>
              </div>
            </div>
            <div className="door">
              <div className="ph pic" style={{ aspectRatio: '4/3', borderRadius: 0 }}><span className="cap">placeholder · online community</span></div>
              <div className="body">
                <p className="tag">Just follow along</p>
                <h3>Sit with us online</h3>
                <p>Not ready for a room yet? Follow the community and learn in small pieces, wherever you are in the world.</p>
                <p className="meta">175,000+ already here</p>
                <span className="go">Join the community →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · WHY DIFFERENT */}
      <section className="section diff" id="diff">
        <div className="wrap-wide">
          <h2 className="h2 measure">We're not here to lecture you.</h2>
          <p className="lede measure" style={{ marginTop: '20px' }}>Naseeha was built by people who drifted too, and found their way back through community, not guilt. We understand both worlds because we've lived both worlds.</p>
          <div className="grid">
            <div className="item"><div className="idx">i.</div><h3>Belonging before behavior</h3><p>You're welcome before you've changed anything. We start with who you are, not a checklist of what you're missing.</p></div>
            <div className="item"><div className="idx">ii.</div><h3>People who get your life</h3><p>Mentors with one foot in the modern world and one in classical scholarship. Nothing you ask will surprise them.</p></div>
            <div className="item"><div className="idx">iii.</div><h3>Start anywhere</h3><p>No prior knowledge. No Arabic required. No "you should know this by now." You begin exactly where you are.</p></div>
            <div className="item"><div className="idx">iv.</div><h3>You're not alone</h3><p>We keep showing up — every week, every season. This is a journey you walk with people, not an event you attend once.</p></div>
          </div>
        </div>
      </section>

      {/* 8 · PROOF */}
      <section className="section proof" id="proof">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '48px' }}>A community that's actually showing up</p>
          <div className="row">
            <div className="stat"><div className="n"><span>94</span></div><div className="l">students in the Institute (AISL)</div></div>
            <div className="stat"><div className="n"><span>31</span></div><div className="l">campuses reached</div></div>
            <div className="stat"><div className="n"><span>12,000+</span></div><div className="l">attendees through the door</div></div>
            <div className="stat"><div className="n">4.9<span className="o">/5</span></div><div className="l">from 200+ NaseehaX reviews</div></div>
          </div>
          <p className="note">140+ events a year · 7,000+ annual dawah participants · 95% course completion</p>
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
        <div className="bg" id="inviteBg">
          <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        </div>
        <div className="wrap inner">
          <h2>Your people are <span className="o">already here.</span></h2>
          <p className="sub">Belong first. The rest follows.</p>
          <div className="cta">
            <a className="btn btn-primary btn-lg" href="#steps">Find your people <span className="arrow">→</span></a>
            <a className="btn btn-ghost-light btn-lg" href="#steps">Start a free course</a>
          </div>
        </div>
        <span className="cap">placeholder · the room fills up</span>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap-wide">
          <div className="top">
            <div>
              <div className="logo">Naseeha</div>
              <p className="tag">A community for young Muslims learning, growing and belonging — together. Built in Lahore, open to everyone.</p>
              <a className="support" href="#">♥ Support the mission →</a>
            </div>
            <div><h4>Start</h4><ul><li><a href="#">Weekly gatherings</a></li><li><a href="#">Online courses</a></li><li><a href="#">Events &amp; retreats</a></li><li><a href="#">Join the community</a></li></ul></div>
            <div><h4>Learn</h4><ul><li><a href="#">The Institute (AISL)</a></li><li><a href="#">NaseehaX</a></li><li><a href="#">Quest (teens)</a></li><li><a href="#">Malja (women)</a></li></ul></div>
            <div><h4>Naseeha</h4><ul><li><a href="#">Our story</a></li><li><a href="#">The NCCM project</a></li><li><a href="#">Support us</a></li><li><a href="#">Contact</a></li></ul></div>
          </div>
          <div className="legal">
            <span>Naseeha Foundation · established 2023 · SECP Section 42 nonprofit · Lahore, Pakistan</span>
            <span>info@naseeha.live</span>
          </div>
        </div>
      </footer>
    </>
  )
}
