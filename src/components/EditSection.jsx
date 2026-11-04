import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'

function EditSection({ onShop }) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText('NIGHT30')
    } catch {
      // Clipboard access can be unavailable in some browsers.
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="section edit-section" id="edit">
      <div className="container edit-grid">
        <div className="edit-image">
          <img src="/editorial/editorial.jpg" alt="Model wearing the After Hours collection" loading="lazy" />
          <div className="edit-image-shade" />
          <span className="edit-image-tag">The night edit / 03</span>
          <div className="edit-stamp">
            <span>UP TO</span>
            <strong>30%</strong>
            <span>OFF</span>
          </div>
        </div>

        <div className="edit-panel">
          <span className="section-kicker">Limited time · while it lasts</span>
          <h2>
            Up to 30% off <span>after-dark</span> essentials.
          </h2>
          <p>
            Hoodies, headphones and the kind of accessories that make a plain
            outfit feel intentional. The night edit is live, but not for long.
          </p>

          <div className="edit-actions">
            <button type="button" className="button button-dark" onClick={onShop}>
              Shop the edit
              <ArrowUpRight size={18} />
            </button>

            <button
              type="button"
              className={`code-button ${copied ? 'is-copied' : ''}`}
              onClick={copyCode}
              aria-label="Copy discount code NIGHT30"
            >
              <span>Code</span>
              <strong>NIGHT30</strong>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <div className="edit-footnote">
            <span className="pulse-dot" />
            Ends Sunday at midnight · online only
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditSection
