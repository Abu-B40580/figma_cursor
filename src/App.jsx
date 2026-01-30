import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import ProductSection from './components/sections/ProductSection.jsx';
import FeatureStrip from './components/sections/FeatureStrip.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Farmers from './components/sections/Farmers.jsx';
import Footer from './components/layout/Footer.jsx';
import PromoModal from './components/common/PromoModal.jsx';
import FloatingCartButton from './components/common/FloatingCartButton.jsx';
import {
  latestProducts,
  popularProducts,
  giftProducts,
} from './data/products.js';

function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <section className="bg-background-soft">
            <div className="mx-auto max-w-content px-4 py-12 md:py-16">
              <ProductSection
                id="latest"
                title="最新上架"
                products={latestProducts}
              />
              <div className="mt-12">
                <ProductSection
                  id="popular"
                  title="熱門商品"
                  products={popularProducts}
                />
              </div>
              <div className="mt-12">
                <ProductSection
                  id="gifts"
                  title="傳遞心意"
                  products={giftProducts}
                  withCTA
                />
              </div>
            </div>
          </section>
          <FeatureStrip />
          <Testimonials />
          <Farmers />
        </main>
        <Footer />
      </div>
      <PromoModal />
      <FloatingCartButton count={2} />
    </>
  );
}

export default App;

