import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Mens = () => {
  const mensProducts = products.filter(p => p.gender === "men");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Men's Shoes</h1>
        <p className="text-muted-foreground mb-8">Discover our range of quality men's footwear for every occasion</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mensProducts.map((product) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default Mens;
