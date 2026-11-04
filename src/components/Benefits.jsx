import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Fast, tracked delivery',
    text: 'Free express shipping on orders over $75. Most orders land in 48 hours.',
  },
  {
    icon: RotateCcw,
    title: '30-day easy returns',
    text: 'Changed your mind? Send it back. No forms, no interrogation.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure checkout',
    text: 'Encrypted payments and every major card accepted. Your data stays yours.',
  },
  {
    icon: Headphones,
    title: 'Real human support',
    text: 'Questions, sizing help, order updates. Talk to a person, not a bot.',
  },
]

function Benefits() {
  return (
    <section className="benefits-section" aria-label="Why shop with rabi3">
      <div className="container benefits-grid">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div className="benefit" key={title}>
            <span className="benefit-icon">
              <Icon size={21} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
