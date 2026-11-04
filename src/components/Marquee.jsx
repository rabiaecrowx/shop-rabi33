import { Sparkles } from 'lucide-react'

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            <span>Curated, not crowded</span>
            <Sparkles size={15} />
            <span>Free shipping over $75</span>
            <Sparkles size={15} />
            <span>New drops every Friday</span>
            <Sparkles size={15} />
            <span>30-day easy returns</span>
            <Sparkles size={15} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
