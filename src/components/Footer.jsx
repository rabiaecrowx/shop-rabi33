import { ArrowUpRight } from 'lucide-react'

const footerGroups = [
  {
    title: 'Shop',
    links: ['New arrivals', 'Sneakers', 'Apparel', 'Tech', 'Accessories'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Size guide', 'Contact us', 'Track order'],
  },
  {
    title: 'Company',
    links: ['Our story', 'Journal', 'Careers', 'Stockists', 'Privacy'],
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="rabi3 home">
            rabi3<span>.</span>
          </a>
          <p>
            Independent finds for the after-hours crowd. Curated in small
            batches, shipped with care.
          </p>
          <div className="footer-socials">
            <a href="#top" aria-label="Instagram">
              <span>IG</span>
            </a>
            <a href="#top" aria-label="TikTok">
              <span>TT</span>
            </a>
            <a href="#top" aria-label="YouTube">
              <span>YT</span>
            </a>
            <a href="#top" aria-label="Facebook">
              <span>FB</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a key={link} href="#top">
                  {link}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 rabi3. All rights reserved.</span>
        <div className="payment-badges" aria-label="Accepted payment methods">
          <span>VISA</span>
          <span>MC</span>
          <span>AMEX</span>
          <span>PAYPAL</span>
          <span>APPLE PAY</span>
        </div>
        <div className="footer-legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
