import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import ShopSection from './components/ShopSection'
import EditSection from './components/EditSection'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import SearchPanel from './components/SearchPanel'
import QuickView from './components/QuickView'
import Toast from './components/Toast'
import { products } from './data/products'
import './App.css'

const CART_KEY = 'rabi3-cart'
const WISHLIST_KEY = 'rabi3-wishlist'

function readStorage(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key)
    if (!stored) return fallback
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [cart, setCart] = useState(() => readStorage(CART_KEY, []))
  const [wishlist, setWishlist] = useState(() => readStorage(WISHLIST_KEY, []))
  const [drawer, setDrawer] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [sort, setSort] = useState('featured')
  const [toast, setToast] = useState({ message: '', visible: false })
  const toastTimer = useRef(null)

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const overlayOpen = drawer !== null || searchOpen || quickView !== null || mobileOpen

  useEffect(() => {
    document.body.classList.toggle('no-scroll', overlayOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [overlayOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (quickView) {
        setQuickView(null)
      } else if (searchOpen) {
        setSearchOpen(false)
      } else if (drawer) {
        setDrawer(null)
      } else if (mobileOpen) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [quickView, searchOpen, drawer, mobileOpen])

  useEffect(() => {
    return () => window.clearTimeout(toastTimer.current)
  }, [])

  const showToast = (message) => {
    setToast({ message, visible: true })
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }))
    }, 2600)
  }

  const addToCart = (product, qty = 1, size = null) => {
    const key = `${product.id}-${size ?? 'one-size'}`
    setCart((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          size,
          qty,
        },
      ]
    })
    setDrawer('cart')
    showToast(`${product.name} added to your bag`)
  }

  const updateQty = (key, delta) => {
    setCart((current) =>
      current.map((item) =>
        item.key === key ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    )
  }

  const removeFromCart = (key) => {
    setCart((current) => current.filter((item) => item.key !== key))
    showToast('Removed from your bag')
  }

  const toggleWishlist = (id) => {
    const product = products.find((item) => item.id === id)
    const wasSaved = wishlist.includes(id)
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
    if (product) {
      showToast(wasSaved ? `${product.name} removed from saved` : `${product.name} saved for later`)
    }
  }

  const scrollToShop = (filter = 'All') => {
    setActiveFilter(filter)
    window.setTimeout(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 30)
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const handleCategorySelect = (category) => {
    scrollToShop(category)
  }

  const handleCheckout = () => {
    setDrawer(null)
    showToast('Demo checkout — no payment was taken.')
  }

  const handleAccountClick = () => {
    showToast('Account sign-in is a demo. Browse as a guest for now.')
  }

  const openSearch = () => {
    setSearchOpen(true)
    setMobileOpen(false)
  }

  const toggleMobile = () => {
    setMobileOpen((current) => !current)
    setSearchOpen(false)
    setDrawer(null)
  }

  const filteredProducts = useMemo(() => {
    let list = products

    if (activeFilter === 'New In') {
      list = products.filter((product) => product.badge === 'New drop')
    } else if (activeFilter !== 'All') {
      list = products.filter((product) => product.category === activeFilter)
    }

    if (sort === 'price-low') {
      list = [...list].sort((a, b) => a.price - b.price)
    } else if (sort === 'price-high') {
      list = [...list].sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [activeFilter, sort])

  const cartCount = cart.reduce((total, item) => total + item.qty, 0)
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0)
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id))

  return (
    <div className="app">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        mobileOpen={mobileOpen}
        onMobileToggle={toggleMobile}
        onCartOpen={() => {
          setDrawer('cart')
          setMobileOpen(false)
        }}
        onWishlistOpen={() => {
          setDrawer('wishlist')
          setMobileOpen(false)
        }}
        onSearchOpen={openSearch}
        onAccountClick={handleAccountClick}
      />

      <main>
        <Hero />
        <Marquee />
        <Categories onSelect={handleCategorySelect} />
        <ShopSection
          products={filteredProducts}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          sort={sort}
          onSortChange={setSort}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onQuickView={setQuickView}
          onAdd={addToCart}
          onReset={() => {
            setActiveFilter('All')
            setSort('featured')
          }}
        />
        <EditSection onShop={() => scrollToShop('All')} />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        open={drawer !== null}
        mode={drawer ?? 'cart'}
        onClose={() => setDrawer(null)}
        cart={cart}
        wishlistProducts={wishlistProducts}
        subtotal={subtotal}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        onAdd={addToCart}
        onToggleWishlist={toggleWishlist}
        onCheckout={handleCheckout}
      />

      <SearchPanel
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onQuickView={setQuickView}
      />

      <QuickView
        key={quickView?.id ?? 'quick-view'}
        product={quickView}
        onClose={() => setQuickView(null)}
        onAdd={addToCart}
        isSaved={quickView ? wishlist.includes(quickView.id) : false}
        onToggleWishlist={toggleWishlist}
      />

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}

export default App
