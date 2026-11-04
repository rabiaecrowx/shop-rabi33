import { Check } from 'lucide-react'

function Toast({ message, visible }) {
  return (
    <div className={`toast ${visible ? 'is-visible' : ''}`} role="status" aria-live="polite">
      <span>
        <Check size={15} />
      </span>
      {message}
    </div>
  )
}

export default Toast
