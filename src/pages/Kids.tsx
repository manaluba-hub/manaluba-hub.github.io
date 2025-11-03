import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Kids = () => {
  const kidsProducts = products.filter(p => p.gender === "kids");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Kids Shoes</h1>
        <p className="text-muted-foreground mb-8">Fun and durable shoes designed for active kids</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kidsProducts.map((product) => (
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

export default Kids;
