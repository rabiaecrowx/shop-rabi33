import { ArrowRight, ChevronDown, SearchX } from 'lucide-react'
import ProductCard from './ProductCard'
import { filters } from '../data/products'

function ShopSection({
  products,
  activeFilter,
  onFilterChange,
  sort,
  onSortChange,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAdd,
  onReset,
}) {
  return (
    <section className="section shop-section" id="shop">
      <div className="container">
        <div className="section-heading shop-heading">
          <div>
            <span className="section-kicker">Fresh off the truck</span>
            <h2>
              Trending right now<span className="orange-dot">.</span>
            </h2>
          </div>
          <p>
            The pieces everyone is adding to their bag. Restocks are fast, but
            not that fast.
          </p>
        </div>

        <div className="shop-toolbar" id="new-in">
          <div className="filter-row" role="group" aria-label="Filter products">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
                aria-pressed={activeFilter === filter}
                onClick={() => onFilterChange(filter)}
              >
                {filter}
                {filter === 'New In' && <span className="filter-spark">✦</span>}
              </button>
            ))}
          </div>

          <div className="sort-control">
            <label htmlFor="sort-products">Sort</label>
            <div className="select-wrap">
              <select id="sort-products" value={sort} onChange={(event) => onSortChange(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
              <ChevronDown size={15} />
            </div>
          </div>
        </div>

        <div className="results-row">
          <span>
            Showing <strong>{products.length}</strong> {products.length === 1 ? 'piece' : 'pieces'}
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
          </span>
          <span className="results-note">Free shipping over $75</span>
        </div>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product, index) => (
              <div
                className="product-card-wrap"
                key={product.id}
                style={{ '--card-delay': `${Math.min(index, 7) * 55}ms` }}
              >
                <ProductCard
                  product={product}
                  isSaved={wishlist.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                  onAdd={onAdd}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-products">
            <span>
              <SearchX size={30} />
            </span>
            <h3>Nothing hiding here.</h3>
            <p>Try a different category or reset the filters to see everything.</p>
            <button type="button" className="button button-primary" onClick={onReset}>
              Reset filters
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ShopSection
