import type { Experience as ExperienceItem } from '../types'

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.company}-${item.role}`} className="timeline__item">
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__content">
            <p className="timeline__period">
              {item.period}
              {item.current && <span className="pill">Current</span>}
            </p>
            <h3>{item.role}</h3>
            <p className="timeline__company">{item.company}</p>
            <ul>
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
