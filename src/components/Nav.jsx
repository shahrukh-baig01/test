import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE } from '../data/site'

const LINKS = [
  ['/courses', 'Courses'],
  ['/community', 'Community'],
  ['/events', 'Events'],
  ['/who-we-are', 'Who we are'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className="nav" id="nav">
      <div className="wrap-wide row">
        <Link className="logo" to="/">Naseeha</Link>
        <div className="links">
          {LINKS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
          <a className="btn btn-primary navcta" href={SITE.donate} target="_blank" rel="noreferrer">Donate</a>
        </div>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile ${open ? 'open' : ''}`}>
        {LINKS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        <a className="btn btn-primary" href={SITE.donate} target="_blank" rel="noreferrer">Donate</a>
      </div>
    </nav>
  )
}
