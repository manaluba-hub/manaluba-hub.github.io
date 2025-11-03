import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shoes.jpg";

const Index = () => {
  const trendingSearches = [
    "Sneakers", "Boots", "Heels", "Running Shoes", "Kids Shoes", 
    "Casual Wear", "Athletic", "Sandals"
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Step Into Style
              </h1>
              <p className="text-xl mb-8">Discover the perfect shoes for every occasion</p>
              <Link to="/deals">
                <Button size="lg" variant="accent" className="text-lg px-8">
                  Shop Deals Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Searches */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-sm font-semibold mb-4 text-muted-foreground">TRENDING SEARCHES</h2>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search) => (
              <Button key={search} variant="outline" size="sm">
                {search}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/womens">
              <Button variant="link" className="text-primary">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/womens" className="group">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <h3 className="text-4xl font-bold group-hover:text-primary transition-colors">Women's</h3>
                  </div>
                </div>
              </Link>
              <Link to="/mens" className="group">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <h3 className="text-4xl font-bold group-hover:text-primary transition-colors">Men's</h3>
                  </div>
                </div>
              </Link>
              <Link to="/kids" className="group">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <h3 className="text-4xl font-bold group-hover:text-primary transition-colors">Kids</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
