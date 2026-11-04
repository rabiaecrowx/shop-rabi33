import { Heart, Plus, Star } from 'lucide-react'

function ProductCard({ product, isSaved, onToggleWishlist, onQuickView, onAdd }) {
  const isSale = product.badge?.startsWith('-')

  return (
    <article className="product-card">
      <div className="product-media">
        <button
          type="button"
          className="product-image-button"
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
        >
          <img src={product.image} alt={product.name} loading="lazy" />
        </button>

        {product.badge && (
          <span className={`product-badge ${isSale ? 'is-sale' : ''}`}>
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className={`heart-button ${isSaved ? 'is-saved' : ''}`}
          aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={isSaved}
          onClick={() => onToggleWishlist(product.id)}
        >
          <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
        </button>

        <button
          type="button"
          className="quick-add"
          onClick={() => onAdd(product, 1, product.sizes?.[0] ?? null)}
        >
          <Plus size={17} />
          Quick add
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="product-rating">
            <Star size={12} fill="currentColor" />
            {product.rating}
          </span>
        </div>

        <button
          type="button"
          className="product-name"
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </button>

        <div className="product-bottom">
          <div className="product-price">
            <strong>${product.price}</strong>
            {product.oldPrice && <s>${product.oldPrice}</s>}
          </div>
          <div className="color-dots" aria-hidden="true">
            {product.colors.slice(0, 3).map((color) => (
              <span key={color} style={{ background: color }} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
