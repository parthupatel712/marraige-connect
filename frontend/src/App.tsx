
import { FeatureCard } from './components/FeatureCard'
import './App.css'

const features = [
  {
    title: 'Find Wedding Vendors',
    description:
      'Discover photographers, caterers, venues, decorators and more.',
  },
  {
    title: 'Request Quotations',
    description:
      'Contact vendors and compare services and pricing.',
  },
  {
    title: 'Manage Bookings',
    description:
      'Track booking requests, confirmations and payment records.',
  },
]

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="/">
          Marriage Connect
        </a>

        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <p className="eyebrow">
            Your wedding planning companion
          </p>

          <h1>
            Find the right vendors for your special day.
          </h1>

          <p className="hero-description">
            Marriage Connect brings wedding customers
            and vendors together in one place.
          </p>

          <p className="development-note">
            Version 1 is currently under development.
          </p>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <h2>What you will be able to do</h2>
            <p>
              Discover, compare and organize your
              wedding services.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        Marriage Connect · Version 1
      </footer>
    </div>
  )
}

export default App
