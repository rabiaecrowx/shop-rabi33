import { ArrowUpRight } from 'lucide-react'
import { categories } from '../data/products'

function Categories({ onSelect }) {
  return (
    <section className="section categories-section" id="categories">
      <div className="container section-heading">
        <div>
          <span className="section-kicker">Browse the good stuff</span>
          <h2>
            Shop by category<span className="orange-dot">.</span>
          </h2>
        </div>
        <p>
          Five edits, zero filler. Every piece is hand-picked for the way you
          actually live.
        </p>
      </div>

      <div className="container category-grid">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className="category-card"
            onClick={() => onSelect(category.name)}
          >
            <img src={category.image} alt="" loading="lazy" />
            <span className="category-shade" />
            <span className="category-count">{category.count}</span>
            <span className="category-arrow">
              <ArrowUpRight size={19} />
            </span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories
