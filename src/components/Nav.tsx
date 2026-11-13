import { useEffect, useState } from 'react'

const links = [
  { href: '#channels', label: 'Channels' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Every section on the page, in document order. Sections without a nav link
 * (hero, projects) are included so that no link is highlighted while they're in view.
 */
const sectionIds = ['top', 'channels', 'videos', 'about', 'experience', 'projects', 'contact']

/** Returns the id of the section currently in view (its top has crossed ~35% of the viewport). */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      // The last section may be too short to ever reach the trigger line.
      if (scrolledToBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      const triggerLine = window.innerHeight * 0.35
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= triggerLine) current = id
      }
      setActive(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}

export function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label={`${name}, back to top`}>
          <span className="rec-dot" aria-hidden="true" />
          {initials}
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav-links" className={open ? 'nav__links nav__links--open' : 'nav__links'}>
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'is-active' : undefined}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
