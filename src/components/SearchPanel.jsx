import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'

const popularSearches = ['Sneakers', 'Headphones', 'Hoodie', 'Camera', 'Watch']

function SearchPanel({ open, onClose, products, onQuickView }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus())
    return () => window.cancelAnimationFrame(frame)
  }, [open])

  const normalizedQuery = query.trim().toLowerCase()
  const results = normalizedQuery
    ? products.filter((product) =>
        `${product.name} ${product.category} ${product.badge ?? ''}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : products.filter((product) => product.badge === 'New drop' || product.rating >= 4.9).slice(0, 4)

  const closePanel = () => {
    setQuery('')
    onClose()
  }

  const selectProduct = (product) => {
    setQuery('')
    onQuickView(product)
    onClose()
  }

  return (
    <div
      className={`search-layer ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button type="button" className="search-backdrop" onClick={closePanel} aria-label="Close search" tabIndex={open ? 0 : -1} />
      <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search products">
        <div className="container">
          <div className="search-panel-top">
            <span className="search-brand">
              rabi3<span>.</span>
            </span>
            <button type="button" className="icon-button" onClick={closePanel} aria-label="Close search">
              <X size={21} />
            </button>
          </div>

          <div className="search-input-wrap">
            <Search size={24} />
            <input
              ref={inputRef}
              type="search"
              placeholder="What are you looking for?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search products"
            />
            {query && (
              <button type="button" className="clear-search" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>

          <div className="search-content">
            <div className="search-content-head">
              <span>{normalizedQuery ? `Results for “${query}”` : 'Popular right now'}</span>
              <span>{results.length} {results.length === 1 ? 'find' : 'finds'}</span>
            </div>

            {!normalizedQuery && (
              <div className="popular-searches">
                {popularSearches.map((term) => (
                  <button key={term} type="button" onClick={() => setQuery(term)}>
                    {term}
                  </button>
                ))}
              </div>
            )}

            {results.length > 0 ? (
              <div className="search-results">
                {results.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    className="search-result"
                    onClick={() => selectProduct(product)}
                  >
                    <span className="search-result-image">
                      <img src={product.image} alt="" />
                    </span>
                    <span className="search-result-info">
                      <span>{product.category}</span>
                      <strong>{product.name}</strong>
                      <span>${product.price}</span>
                    </span>
                    <ArrowUpRight size={18} />
                  </button>
                ))}
              </div>
            ) : (
              <div className="search-empty">
                <p>No matches for “{query}”.</p>
                <span>Try “headphones”, “hoodie” or “sneakers”.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPanel
