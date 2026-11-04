import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'New In', href: '#new-in' },
  { label: 'Categories', href: '#categories' },
  { label: 'The Edit', href: '#edit' },
  { label: 'Reviews', href: '#reviews' },
]

function Header({
  cartCount,
  wishlistCount,
  mobileOpen,
  onMobileToggle,
  onCartOpen,
  onWishlistOpen,
  onSearchOpen,
  onAccountClick,
}) {
  return (
    <header className="site-header" id="top">
      <div className="announcement">
        <div className="announcement-track" aria-hidden="true">
          <span>Free express shipping over $75</span>
          <span className="announcement-dot">•</span>
          <span>New drop: After Hours 03</span>
          <span className="announcement-dot">•</span>
          <span>30-day easy returns</span>
          <span className="announcement-dot">•</span>
          <span>Free express shipping over $75</span>
          <span className="announcement-dot">•</span>
          <span>New drop: After Hours 03</span>
          <span className="announcement-dot">•</span>
          <span>30-day easy returns</span>
          <span className="announcement-dot">•</span>
        </div>
      </div>

      <div className="header-inner">
        <div className="header-left">
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={onMobileToggle}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <a className="brand" href="#top" aria-label="rabi3 home">
            rabi3<span>.</span>
          </a>
        </div>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label="Search products"
            onClick={onSearchOpen}
          >
            <Search size={20} />
          </button>
          <button
            className="icon-button account-button"
            type="button"
            aria-label="Your account"
            onClick={onAccountClick}
          >
            <UserRound size={20} />
          </button>
          <button
            className="icon-button count-button"
            type="button"
            aria-label={`Wishlist, ${wishlistCount} items`}
            onClick={onWishlistOpen}
          >
            <Heart size={20} />
            {wishlistCount > 0 && <span className="count-badge">{wishlistCount}</span>}
          </button>
          <button
            className="cart-button"
            type="button"
            aria-label={`Shopping bag, ${cartCount} items`}
            onClick={onCartOpen}
          >
            <ShoppingBag size={19} />
            <span>Bag</span>
            <span className="count-badge cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}
        inert={!mobileOpen ? true : undefined}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              style={{ '--delay': `${index * 45}ms` }}
              onClick={onMobileToggle}
            >
              <span>{link.label}</span>
              <span className="mobile-link-index">0{index + 1}</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <p>Independent finds. No filler.</p>
          <div>
            <a href="#shop" onClick={onMobileToggle}>
              Instagram
            </a>
            <a href="#shop" onClick={onMobileToggle}>
              TikTok
            </a>
            <a href="#shop" onClick={onMobileToggle}>
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
