import { useState, type ReactNode } from 'react'

interface LiteEmbedProps {
  /** iframe src, loaded only after the visitor clicks play. */
  src: string
  title: string
  /** Thumbnail / poster shown until the visitor clicks. */
  poster: ReactNode
  /** Extra overlay content on top of the poster (badges etc). */
  overlay?: ReactNode
  playLabel: string
}

/**
 * Shows a lightweight thumbnail first and swaps in the real YouTube iframe on click.
 * Keeps the page fast even with many embeds.
 */
export function LiteEmbed({ src, title, poster, overlay, playLabel }: LiteEmbedProps) {
  const [active, setActive] = useState(false)

  return (
    <div className="embed">
      {active ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="embed__poster" onClick={() => setActive(true)} aria-label={playLabel}>
          {poster}
          {overlay}
          <span className="embed__play" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
