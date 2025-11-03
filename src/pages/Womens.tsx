import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Womens = () => {
  const womensProducts = products.filter(p => p.gender === "women");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Women's Shoes</h1>
        <p className="text-muted-foreground mb-8">Explore our collection of stylish and comfortable women's footwear</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {womensProducts.map((product) => (
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

export default Womens;
