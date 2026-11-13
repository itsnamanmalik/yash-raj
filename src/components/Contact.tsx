import type { Profile } from '../types'

export function Contact({ profile }: { profile: Profile }) {
  const tel = profile.phone.replace(/[^\d+]/g, '')
  const socials = profile.socials.filter((s) => s.url)

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2>Got footage? Let's make it watchable.</h2>
        <p className="section__intro">
          Available for podcasts, promos, reels and long-form edits. Based in {profile.location}, working with teams
          anywhere.
        </p>
        <div className="contact__links">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="button" href={`tel:${tel}`}>
            {profile.phone}
          </a>
          {socials.map((s) => (
            <a key={s.url} className="button" href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
