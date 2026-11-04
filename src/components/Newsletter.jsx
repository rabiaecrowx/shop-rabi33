import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-watermark" aria-hidden="true">
        RABI3
      </div>
      <div className="container newsletter-inner">
        <div className="newsletter-copy">
          <span className="section-kicker">The inside track</span>
          <h2>
            Get 10% off your
            <br />
            first drop<span className="orange-dot">.</span>
          </h2>
          <p>
            New arrivals, restocks and the occasional secret sale. One good
            email a week. No noise.
          </p>
        </div>

        <div className="newsletter-form-wrap">
          {submitted ? (
            <div className="newsletter-success" role="status">
              <span>
                <Check size={22} />
              </span>
              <div>
                <strong>You&apos;re on the list.</strong>
                <p>Your code is on its way to {email}. Welcome to the night shift.</p>
              </div>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email">Email address</label>
              <div className="newsletter-input-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@somewhere.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe to the newsletter">
                  Join the list
                  <ArrowRight size={17} />
                </button>
              </div>
              <span className="form-note">
                By joining, you agree to our privacy policy. Unsubscribe anytime.
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
