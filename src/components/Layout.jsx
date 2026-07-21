import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { useScrollFx } from '../lib/primitives'

export default function Layout() {
  useScrollFx()
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
