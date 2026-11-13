export interface Profile {
  name: string
  role: string
  tagline: string
  yearsOfExperience: string
  summary: string
  location: string
  email: string
  phone: string
  /** Optional links shown in the contact section. Leave a value empty to hide it. */
  socials: { label: string; url: string }[]
}

export interface Experience {
  role: string
  company: string
  period: string
  current?: boolean
  highlights: string[]
}

export interface Project {
  title: string
  description: string
}

export interface Education {
  degree: string
  institution: string
}

export interface YouTubeChannel {
  name: string
  /** Channel URL (handle or /channel/ URL). */
  url: string
  handle: string
  /** Channel ID (starts with "UC"). Used to embed the channel's uploads playlist. */
  channelId: string
  /** Subscriber count as a plain number. The site sorts channels by this. */
  subscribers: number
  videoCount: number
  /** Channel profile picture URL. */
  avatar: string
  description: string
}

export interface YouTubeVideo {
  /** Any YouTube URL: youtu.be/ID, youtube.com/watch?v=ID, /shorts/ID, /embed/ID */
  url: string
  title: string
  channel: string
  /** View count as a plain number. The site sorts videos by this. */
  views: number
  /** ISO date (YYYY-MM-DD) */
  publishedAt: string
}

export interface PortfolioData {
  profile: Profile
  stats: { statsUpdatedOn: string }
  skills: string[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: string[]
  channels: YouTubeChannel[]
  videos: YouTubeVideo[]
}
