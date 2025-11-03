import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="bg-[hsl(var(--banner-bg))] text-[hsl(var(--banner-text))] py-2 text-center text-sm">
        Free Shipping on Orders Over $50 | Shop Now
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            SHOE<span className="text-accent">STORE</span>
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Women's</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <Link to="/womens" className="block py-2 hover:text-primary">All Women's Shoes</Link>
                    <Link to="/womens" className="block py-2 hover:text-primary">Sneakers</Link>
                    <Link to="/womens" className="block py-2 hover:text-primary">Heels</Link>
                    <Link to="/womens" className="block py-2 hover:text-primary">Boots</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Men's</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <Link to="/mens" className="block py-2 hover:text-primary">All Men's Shoes</Link>
                    <Link to="/mens" className="block py-2 hover:text-primary">Sneakers</Link>
                    <Link to="/mens" className="block py-2 hover:text-primary">Boots</Link>
                    <Link to="/mens" className="block py-2 hover:text-primary">Dress Shoes</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <Link to="/kids" className="block py-2 hover:text-primary">All Kids Shoes</Link>
                    <Link to="/kids" className="block py-2 hover:text-primary">Boys</Link>
                    <Link to="/kids" className="block py-2 hover:text-primary">Girls</Link>
                    <Link to="/kids" className="block py-2 hover:text-primary">Toddlers</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/deals" className="px-4 py-2 inline-block hover:text-accent font-semibold">
                  DEALS
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 inline-block hover:text-primary">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 inline-block hover:text-primary">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search shoes..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
