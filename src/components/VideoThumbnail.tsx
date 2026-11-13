import { useState } from 'react'
import { thumbnail } from '../utils/youtube'

interface VideoThumbnailProps {
  id: string
  alt: string
  eager?: boolean
  quality?: 'maxresdefault' | 'mqdefault'
}

/** YouTube thumbnail that falls back to the always-available hqdefault image. */
export function VideoThumbnail({ id, alt, eager = false, quality = 'maxresdefault' }: VideoThumbnailProps) {
  const [src, setSrc] = useState(thumbnail(id, quality))
  const fallback = thumbnail(id, 'hqdefault')

  const swapToFallback = () => {
    if (src !== fallback) setSrc(fallback)
  }

  return (
    <img
      className="thumb"
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={swapToFallback}
      // YouTube serves a 120px grey placeholder when maxres doesn't exist
      onLoad={(e) => e.currentTarget.naturalWidth <= 120 && swapToFallback()}
    />
  )
}
