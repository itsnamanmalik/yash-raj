import type { YouTubeVideo } from '../types'
import { formatCompact, formatDate, formatFull, getVideoId, videoEmbedUrl, watchUrl } from '../utils/youtube'
import { LiteEmbed } from './LiteEmbed'
import { VideoThumbnail } from './VideoThumbnail'

interface VideoCardProps {
  video: YouTubeVideo
  rank: number
  featured?: boolean
}

export function VideoCard({ video, rank, featured = false }: VideoCardProps) {
  const id = getVideoId(video.url)

  return (
    <article className={featured ? 'video-card video-card--featured' : 'video-card'}>
      <LiteEmbed
        src={videoEmbedUrl(id)}
        title={video.title}
        playLabel={`Play: ${video.title}`}
        poster={<VideoThumbnail id={id} alt="" eager={featured} />}
        overlay={
          <>
            <span className="badge badge--rank">#{rank}</span>
            <span className="badge badge--views" title={`${formatFull(video.views)} views`}>
              {formatCompact(video.views)} views
            </span>
          </>
        }
      />
      <div className="video-card__body">
        {featured && <p className="eyebrow">Most-watched edit</p>}
        <h3 className="video-card__title" title={video.title}>
          {video.title}
        </h3>
        <p className="video-card__meta">
          <span>{video.channel}</span>
          <span aria-hidden="true">•</span>
          <span>{formatDate(video.publishedAt)}</span>
        </p>
        {featured && (
          <p className="video-card__stat">
            <strong>{formatFull(video.views)}</strong> views on YouTube
          </p>
        )}
        <a className="link" href={watchUrl(id)} target="_blank" rel="noreferrer">
          Watch on YouTube ↗
        </a>
      </div>
    </article>
  )
}
