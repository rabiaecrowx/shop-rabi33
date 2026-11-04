import {
  ArrowRight,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'

function CartDrawer({
  open,
  mode,
  onClose,
  cart,
  wishlistProducts,
  subtotal,
  onUpdateQty,
  onRemove,
  onAdd,
  onToggleWishlist,
  onCheckout,
}) {
  const isCart = mode === 'cart'
  const itemCount = cart.reduce((total, item) => total + item.qty, 0)
  const remaining = Math.max(0, 75 - subtotal)
  const progress = Math.min(100, (subtotal / 75) * 100)

  return (
    <div
      className={`drawer-layer ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button
        type="button"
        className="drawer-backdrop"
        aria-label={`Close ${isCart ? 'shopping bag' : 'wishlist'}`}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={isCart ? 'Shopping bag' : 'Wishlist'}
      >
        <div className="drawer-header">
          <div>
            <span className="section-kicker">{isCart ? 'Almost yours' : 'Keep an eye on it'}</span>
            <h2>
              {isCart ? 'Your bag' : 'Saved for later'}
              <span className="drawer-count">
                {isCart ? itemCount : wishlistProducts.length}
              </span>
            </h2>
          </div>
          <button type="button" className="icon-button drawer-close" onClick={onClose} aria-label="Close panel">
            <X size={21} />
          </button>
        </div>

        {isCart && cart.length > 0 && (
          <div className="shipping-progress">
            <p>
              {remaining > 0 ? (
                <>
                  You&apos;re <strong>${remaining.toFixed(2)}</strong> away from free express shipping.
                </>
              ) : (
                <>
                  <strong>Free express shipping</strong> unlocked. Nice one.
                </>
              )}
            </p>
            <div className="progress-track">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="drawer-body">
          {isCart ? (
            cart.length > 0 ? (
              cart.map((item) => (
                <div className="cart-item" key={item.key}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div>
                      <span>{item.category}</span>
                      <h3>{item.name}</h3>
                      {item.size && <p>Size: {item.size}</p>}
                    </div>
                    <div className="cart-item-bottom">
                      <div className="qty-control" aria-label={`Quantity for ${item.name}`}>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.key, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus size={13} />
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.key, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <strong>${(item.price * item.qty).toFixed(2)}</strong>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item.key)}
                    aria-label={`Remove ${item.name} from bag`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            ) : (
              <div className="drawer-empty">
                <span>
                  <ShoppingBag size={30} />
                </span>
                <h3>Your bag is empty.</h3>
                <p>Good things are waiting. Let&apos;s find your next favorite.</p>
                <button type="button" className="button button-primary" onClick={onClose}>
                  Start shopping
                  <ArrowRight size={17} />
                </button>
              </div>
            )
          ) : wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <div className="wishlist-item" key={product.id}>
                <div className="cart-item-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="wishlist-item-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <strong>${product.price}</strong>
                  <button
                    type="button"
                    className="wishlist-add"
                    onClick={() => onAdd(product, 1, product.sizes?.[0] ?? null)}
                  >
                    Add to bag
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  <X size={17} />
                </button>
              </div>
            ))
          ) : (
            <div className="drawer-empty">
              <span>
                <Heart size={30} />
              </span>
              <h3>No saves yet.</h3>
              <p>Tap the heart on anything that catches your eye and it will live here.</p>
              <button type="button" className="button button-primary" onClick={onClose}>
                Find something good
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>

        {isCart && cart.length > 0 && (
          <div className="drawer-footer">
            <div className="subtotal-row">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <p>Shipping and taxes calculated at checkout.</p>
            <button type="button" className="checkout-button" onClick={onCheckout}>
              Checkout securely
              <ArrowRight size={18} />
            </button>
            <div className="secure-note">
              <ShieldCheck size={15} />
              Secure encrypted checkout · 30-day returns
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
