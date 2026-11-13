import type { YouTubeChannel, YouTubeVideo } from '../types'

/** Extracts the 11-character video ID from any common YouTube URL format. */
export function getVideoId(url: string): string {
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /[?&]v=([\w-]{11})/,
    /\/(?:embed|shorts|live|v)\/([\w-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  // Allow a bare ID to be pasted as the url too.
  if (/^[\w-]{11}$/.test(url.trim())) return url.trim()
  throw new Error(`Could not find a YouTube video ID in: ${url}`)
}

export const thumbnail = (id: string, quality: 'maxresdefault' | 'hqdefault' | 'mqdefault' = 'maxresdefault') =>
  `https://i.ytimg.com/vi/${id}/${quality}.jpg`

export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`

export const videoEmbedUrl = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`

/**
 * Every channel has an auto-generated "uploads" playlist whose ID is the
 * channel ID with the leading "UC" swapped for "UU". Embedding it lets visitors
 * watch the channel's latest videos without leaving the page.
 */
export const channelEmbedUrl = (channel: YouTubeChannel) =>
  `https://www.youtube.com/embed/videoseries?list=UU${channel.channelId.slice(2)}&autoplay=1&rel=0`

export const subscribeUrl = (channel: YouTubeChannel) => `${channel.url}?sub_confirmation=1`

const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
const full = new Intl.NumberFormat('en-IN')

export const formatCompact = (n: number) => compact.format(n)
export const formatFull = (n: number) => full.format(n)

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export const sortChannelsBySubscribers = (channels: YouTubeChannel[]) =>
  [...channels].sort((a, b) => b.subscribers - a.subscribers)

export const sortVideosByViews = (videos: YouTubeVideo[]) => [...videos].sort((a, b) => b.views - a.views)
