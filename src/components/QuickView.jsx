import { useState } from 'react'
import { Heart, Minus, Plus, Star, Truck, X } from 'lucide-react'

function QuickView({ product, onClose, onAdd, isSaved, onToggleWishlist }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? null)
  const [qty, setQty] = useState(1)

  if (!product) return null

  const handleAdd = () => {
    onAdd(product, qty, selectedSize)
    onClose()
  }

  return (
    <div className="modal-layer">
      <button type="button" className="modal-backdrop" onClick={onClose} aria-label="Close quick view" />
      <div className="quick-view" role="dialog" aria-modal="true" aria-label={`Quick view: ${product.name}`}>
        <button type="button" className="icon-button quick-view-close" onClick={onClose} aria-label="Close quick view">
          <X size={21} />
        </button>

        <div className="quick-view-media">
          <img src={product.image} alt={product.name} />
          {product.badge && <span className="product-badge">{product.badge}</span>}
          <button
            type="button"
            className={`heart-button quick-view-heart ${isSaved ? 'is-saved' : ''}`}
            onClick={() => onToggleWishlist(product.id)}
            aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
            aria-pressed={isSaved}
          >
            <Heart size={19} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
          <span className="quick-view-image-note">rabi3 / studio selection</span>
        </div>

        <div className="quick-view-info">
          <div className="quick-view-kicker">
            <span>{product.category}</span>
            <span>{product.badge || 'In stock'}</span>
          </div>

          <h2>{product.name}</h2>

          <div className="quick-view-rating">
            <span className="stars">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} size={13} fill="currentColor" />
              ))}
            </span>
            <span>
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="quick-view-price">
            <strong>${product.price}</strong>
            {product.oldPrice && <s>${product.oldPrice}</s>}
            {product.oldPrice && <span>Save ${product.oldPrice - product.price}</span>}
          </div>

          <p className="quick-view-description">{product.description}</p>

          <div className="option-block">
            <div className="option-label">
              <span>Colour</span>
              <span>Core selection</span>
            </div>
            <div className="quick-view-colors">
              {product.colors.map((color, index) => (
                <span
                  key={color}
                  className={index === 0 ? 'is-selected' : ''}
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>

          {product.sizes && (
            <div className="option-block">
              <div className="option-label">
                <span>Size</span>
                <button type="button">Size guide</button>
              </div>
              <div className="size-row">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={selectedSize === size ? 'is-selected' : ''}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="quick-view-buy">
            <div className="qty-control qty-large">
              <button type="button" onClick={() => setQty((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus size={14} />
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((value) => value + 1)} aria-label="Increase quantity">
                <Plus size={14} />
              </button>
            </div>
            <button type="button" className="button button-primary quick-add-button" onClick={handleAdd}>
              Add to bag
              <span>${(product.price * qty).toFixed(2)}</span>
            </button>
          </div>

          <div className="quick-view-details">
            <h3>Why you&apos;ll like it</h3>
            <ul>
              {product.details.map((detail) => (
                <li key={detail}>
                  <span />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="quick-view-shipping">
            <Truck size={16} />
            Free express shipping over $75 · 30-day returns
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickView
