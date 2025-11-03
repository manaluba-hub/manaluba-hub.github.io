import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About ShoeStore</h1>
        
        <div className="max-w-3xl space-y-6 text-muted-foreground">
          <p className="text-lg">
            Welcome to ShoeStore, your premier destination for quality footwear for the entire family.
            Since our founding, we've been committed to bringing you the latest styles, the best brands,
            and unbeatable value.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Story</h2>
          <p>
            What started as a small family business has grown into one of the most trusted shoe retailers
            in the country. Our passion for shoes and dedication to customer service has been the foundation
            of our success.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Mission</h2>
          <p>
            We believe everyone deserves access to quality footwear that combines style, comfort, and
            affordability. That's why we carefully curate our selection and work directly with manufacturers
            to bring you the best prices.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Extensive selection of shoes for women, men, and kids</li>
            <li>Competitive prices and regular deals</li>
            <li>Free shipping on orders over $50</li>
            <li>Easy returns and exchanges</li>
            <li>Expert customer service team</li>
            <li>Authentic products from trusted brands</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
