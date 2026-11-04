import { ArrowRight, ArrowUpRight, Star, Truck } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">
        RABI3
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            New season / 2026
          </div>

          <h1 className="hero-title">
            Own the
            <br />
            <span className="outline-text">after</span> hours
            <span className="hero-period">.</span>
          </h1>

          <p className="hero-description">
            Curated sneakers, tech and everyday objects for people who do their
            best work after dark. No filler. Just the good stuff.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#shop">
              Shop the drop
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-ghost" href="#categories">
              Explore categories
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span style={{ background: '#ff5c00' }}>MR</span>
              <span style={{ background: '#d8cfc0', color: '#111' }}>JK</span>
              <span style={{ background: '#393939' }}>AS</span>
              <span className="avatar-more">24k</span>
            </div>
            <div>
              <div className="stars" aria-label="Rated 4.9 out of 5">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={13} fill="currentColor" />
                ))}
                <span>4.9</span>
              </div>
              <p>Loved by 24,000+ night owls</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img
              src="/editorial/hero-shoe.jpg"
              alt="Aero Runner 01 sneaker from the After Hours collection"
            />
            <div className="hero-card-shade" />
            <div className="hero-card-topline">
              <span>After Hours / 03</span>
              <span>Look 01</span>
            </div>
            <div className="hero-card-content">
              <p>Featured drop</p>
              <h2>Aero Runner 01</h2>
              <span>Built for the long way home.</span>
            </div>
            <a className="hero-card-arrow" href="#shop" aria-label="Shop the Aero Runner 01">
              <ArrowUpRight size={22} />
            </a>
          </div>

          <div className="floating-card price-card">
            <div>
              <span className="floating-label">The drop</span>
              <strong>$189</strong>
            </div>
            <span className="floating-pill">New</span>
          </div>

          <div className="floating-card stock-card">
            <span className="stock-icon">
              <Truck size={17} />
            </span>
            <div>
              <strong>Free express</strong>
              <span>Orders over $75</span>
            </div>
          </div>

          <div className="roundel" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="roundelPath"
                  d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                />
              </defs>
              <text>
                <textPath href="#roundelPath">
                  FREE SHIPPING · WORLDWIDE · FREE SHIPPING ·
                </textPath>
              </text>
            </svg>
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="container hero-stats">
        <div>
          <strong>12k+</strong>
          <span>Independent finds</span>
        </div>
        <div>
          <strong>48h</strong>
          <span>Express delivery</span>
        </div>
        <div>
          <strong>4.9/5</strong>
          <span>From 3,400 reviews</span>
        </div>
        <div>
          <strong>30 days</strong>
          <span>No-stress returns</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
