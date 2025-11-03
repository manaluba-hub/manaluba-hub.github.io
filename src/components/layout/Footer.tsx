import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/womens" className="text-muted-foreground hover:text-primary">Women's Shoes</Link></li>
              <li><Link to="/mens" className="text-muted-foreground hover:text-primary">Men's Shoes</Link></li>
              <li><Link to="/kids" className="text-muted-foreground hover:text-primary">Kids Shoes</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-primary">Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Shipping Info</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Returns</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Store Locator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ShoeStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
