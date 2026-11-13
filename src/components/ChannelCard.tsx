import type { YouTubeChannel } from '../types'
import { channelEmbedUrl, formatCompact, formatFull } from '../utils/youtube'
import { LiteEmbed } from './LiteEmbed'

interface ChannelCardProps {
  channel: YouTubeChannel
  rank: number
}

export function ChannelCard({ channel, rank }: ChannelCardProps) {
  return (
    <article className="channel-card">
      <LiteEmbed
        src={channelEmbedUrl(channel)}
        title={`${channel.name}: latest uploads`}
        playLabel={`Play latest uploads from ${channel.name}`}
        poster={
          <span className="channel-poster">
            <img className="channel-poster__bg" src={channel.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" />
            <img className="channel-poster__avatar" src={channel.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" />
            <span className="channel-poster__hint">Play latest uploads</span>
          </span>
        }
        overlay={<span className="badge badge--rank">#{rank}</span>}
      />
      <div className="channel-card__body">
        <div className="channel-card__head">
          <h3>{channel.name}</h3>
          <span className="channel-card__subs" title={`${formatFull(channel.subscribers)} subscribers`}>
            {formatCompact(channel.subscribers)}
            <small>subscribers</small>
          </span>
        </div>
        <p className="channel-card__handle">
          {channel.handle} · {formatFull(channel.videoCount)} videos
        </p>
        <p className="channel-card__desc">{channel.description}</p>
        <a className="link" href={channel.url} target="_blank" rel="noreferrer">
          Visit channel ↗
        </a>
      </div>
    </article>
  )
}
