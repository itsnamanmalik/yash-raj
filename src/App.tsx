import { portfolio } from './data/portfolio'
import { ChannelCard } from './components/ChannelCard'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Section } from './components/Section'
import { VideoCard } from './components/VideoCard'
import { formatCompact, sortChannelsBySubscribers, sortVideosByViews } from './utils/youtube'

const { profile, skills, experience, projects, education, certifications } = portfolio

// Sorted once at load: channels by subscribers, videos by views (both high → low).
const channels = sortChannelsBySubscribers(portfolio.channels)
const videos = sortVideosByViews(portfolio.videos)
const [topVideo, ...otherVideos] = videos

const totalViews = videos.reduce((sum, v) => sum + v.views, 0)
const totalSubscribers = channels.reduce((sum, c) => sum + c.subscribers, 0)

const heroStats = [
  { label: 'Years editing', value: profile.yearsOfExperience },
  { label: 'Views on featured edits', value: `${formatCompact(totalViews)}+` },
  { label: 'Combined channel reach', value: `${formatCompact(totalSubscribers)}+` },
  { label: 'Channels', value: String(channels.length) },
]


export default function App() {
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} stats={heroStats} stripVideos={videos.slice(0, 8)} />

        <Section
          id="channels"
          eyebrow="Channels"
          title="Channels I've edited for"
        >
          <div className="grid grid--channels">
            {channels.map((channel, i) => (
              <ChannelCard key={channel.channelId} channel={channel} rank={i + 1} />
            ))}
          </div>
        </Section>

        <Section
          id="videos"
          eyebrow="Selected work"
          title="Videos I've edited"
        >
          {topVideo && <VideoCard video={topVideo} rank={1} featured />}
          <div className="grid grid--videos">
            {otherVideos.map((video, i) => (
              <VideoCard key={video.url} video={video} rank={i + 2} />
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="Editing with pace and purpose">
          <div className="about">
            <p className="about__summary">{profile.summary}</p>
            <div>
              <h3 className="subhead">Skills</h3>
              <ul className="chips">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <Experience items={experience} />
        </Section>

        <Section id="projects" eyebrow="Projects & credentials" title="Highlights">
          <div className="grid grid--projects">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <div className="credentials">
            <div className="card">
              <h3 className="subhead">Education</h3>
              <ul className="plain-list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <strong>{item.degree}</strong>
                    <span>{item.institution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="subhead">Certifications</h3>
              <ul className="plain-list">
                {certifications.map((cert) => (
                  <li key={cert}>
                    <strong>{cert}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Contact profile={profile} />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </div>
      </footer>
    </>
  )
}
