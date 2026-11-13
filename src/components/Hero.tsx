import type { Profile, YouTubeVideo } from '../types'
import { getVideoId } from '../utils/youtube'
import { VideoThumbnail } from './VideoThumbnail'

interface HeroProps {
  profile: Profile
  stats: { label: string; value: string }[]
  stripVideos: YouTubeVideo[]
}

export function Hero({ profile, stats, stripVideos }: HeroProps) {
  // Duplicate the list so the film strip can loop seamlessly.
  const strip = [...stripVideos, ...stripVideos]

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="rec-dot" aria-hidden="true" /> {profile.role} · {profile.yearsOfExperience} years of experience
        </p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#videos">
            Watch my work
          </a>
          <a className="button" href={`mailto:${profile.email}`}>
            Hire me
          </a>
        </div>
        <dl className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#videos" className="filmstrip" aria-label="Jump to videos">
        <div className="filmstrip__track">
          {strip.map((video, i) => (
            <div className="filmstrip__frame" key={`${video.url}-${i}`}>
              <VideoThumbnail id={getVideoId(video.url)} alt="" quality="mqdefault" eager={i < 4} />
            </div>
          ))}
        </div>
      </a>
    </section>
  )
}
