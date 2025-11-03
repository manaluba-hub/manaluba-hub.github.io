import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import dealsBanner from "@/assets/deals-banner.jpg";
import { Badge } from "@/components/ui/badge";

const Deals = () => {
  // Show all products with a "discount" badge
  const dealProducts = products.map(p => ({ ...p, price: p.price * 0.7 }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div 
          className="h-64 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${dealsBanner})` }}
        >
          <div className="text-center">
            <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
              UP TO 30% OFF
            </Badge>
            <h1 className="text-5xl font-bold text-white">Black Friday Deals</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <p className="text-muted-foreground mb-8 text-center">Limited time offers on your favorite shoes</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.map((product) => (
              <div key={product.id} className="relative">
                <Badge variant="destructive" className="absolute top-4 right-4 z-10">
                  30% OFF
                </Badge>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;
