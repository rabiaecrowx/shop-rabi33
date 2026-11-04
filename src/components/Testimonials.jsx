import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/products'

function Testimonials() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <div>
            <span className="section-kicker">The word on the street</span>
            <h2>
              Good things, from good people<span className="orange-dot">.</span>
            </h2>
          </div>
          <div className="reviews-score">
            <strong>4.9</strong>
            <div>
              <div className="stars" aria-label="4.9 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <span>From 3,400+ verified reviews</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {testimonials.map((review, index) => (
            <figure className="review-card" key={review.name}>
              <Quote size={26} className="review-quote" />
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                <span className={`review-avatar review-avatar-${index + 1}`}>
                  {review.initials}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.meta}</span>
                </div>
                <span className="review-stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={11} fill="currentColor" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="press-strip">
          <span>As seen in</span>
          <div>
            <strong>HYPEBEAST</strong>
            <strong>GQ</strong>
            <strong>MONOCLE</strong>
            <strong>HIGHSNOBIETY</strong>
            <strong>DAZED</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
