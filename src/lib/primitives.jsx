import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Branded self-contained placeholder (navy→orange gradient). Zero network. */
export function Ph({ cap, style, className = '' }) {
  return (
    <div className={`ph ${className}`.trim()} style={style}>
      {cap ? <span className="cap">{cap}</span> : null}
    </div>
  )
}

/* Marquee card: gradient placeholder + label + caption chip. */
export function MqCard({ label, cap }) {
  return (
    <div className="mq-card">
      <div className="ph" style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
      <span className="lbl">{label}</span>
      <span className="cap">{cap}</span>
    </div>
  )
}

/* Dark hero band used at the top of every inner page. */
export function PageHero({ eyebrow, title, sub, cap }) {
  return (
    <header className="page-hero">
      <div className="bg" data-parallax="0.12">
        <div className="ph" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
      </div>
      <div className="wrap-wide inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {sub ? <p className="sub">{sub}</p> : null}
      </div>
      {cap ? <span className="cap">{cap}</span> : null}
    </header>
  )
}

/* Nav solid-on-scroll + subtle parallax on [data-parallax] layers.
   Re-runs on route change to re-collect layers and reset scroll. */
export function useScrollFx() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const nav = document.getElementById('nav')
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const hero = document.querySelector('.hero, .page-hero')
    const layers = Array.from(document.querySelectorAll('[data-parallax]'))
      .map((el) => [el, parseFloat(el.getAttribute('data-parallax')) || 0.1])
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const threshold = hero ? hero.offsetHeight - 90 : 60
      if (nav) nav.classList.toggle('solid', y > threshold)
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
  }, [pathname])
}
