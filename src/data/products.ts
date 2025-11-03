import womenRunning from "@assets/stock_images/women's_athletic_run_c8c8624c.jpg";
import womenHeels from "@assets/stock_images/women's_elegant_high_a5e3fb31.jpg";
import kidsSneakers from "@assets/stock_images/kids_colorful_sneake_9d2962b4.jpg";
import menBoots from "@assets/stock_images/men's_leather_boots_5e633b73.jpg";
import womenCanvas from "@assets/stock_images/women's_canvas_sneak_9042922f.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: "women" | "men" | "kids";
  description: string;
  sizes: number[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Women's Athletic Running Shoes",
    price: 89.99,
    image: womenRunning,
    category: "Athletic",
    gender: "women",
    description: "High-performance running shoes with superior cushioning and support for your active lifestyle. Features breathable mesh upper and responsive foam midsole for maximum comfort during long runs.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["Blue", "Pink", "Black"]
  },
  {
    id: "2",
    name: "Women's Classic Heels",
    price: 79.99,
    image: womenHeels,
    category: "Heels",
    gender: "women",
    description: "Elegant heels perfect for any formal occasion. Comfortable fit with timeless style. Padded insole ensures all-day comfort while maintaining a sophisticated look.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Nude", "Black", "Red"]
  },
  {
    id: "3",
    name: "Kids Colorful Sneakers",
    price: 49.99,
    image: kidsSneakers,
    category: "Sneakers",
    gender: "kids",
    description: "Fun and vibrant sneakers designed for active kids. Durable construction with non-slip sole for safety. Easy velcro or lace closure for independent wear.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Multi", "Blue", "Pink"]
  },
  {
    id: "4",
    name: "Men's Leather Boots",
    price: 129.99,
    image: menBoots,
    category: "Boots",
    gender: "men",
    description: "Premium leather boots crafted for style and durability. Perfect for casual or business casual wear. Water-resistant finish and cushioned footbed provide comfort in any weather.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: "5",
    name: "Women's Canvas Sneakers",
    price: 59.99,
    image: womenCanvas,
    category: "Sneakers",
    gender: "women",
    description: "Classic canvas sneakers that go with everything. Lightweight and breathable for everyday comfort. Flexible rubber outsole and cushioned insole for all-day wear.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["White", "Black", "Navy"]
  },
  {
    id: "6",
    name: "Men's Running Shoes",
    price: 94.99,
    image: womenRunning,
    category: "Athletic",
    gender: "men",
    description: "Advanced running technology for maximum performance and comfort during your workouts. Engineered mesh provides ventilation while maintaining support. Shock-absorbing sole reduces impact.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Black", "Blue", "Red"]
  },
  {
    id: "7",
    name: "Kids Sport Shoes",
    price: 54.99,
    image: kidsSneakers,
    category: "Athletic",
    gender: "kids",
    description: "Supportive athletic shoes designed for young athletes. Great traction and stability for active play. Reinforced toe cap provides extra durability where kids need it most.",
    sizes: [10, 11, 12, 13, 1, 2, 3, 4],
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "8",
    name: "Women's Casual Flats",
    price: 64.99,
    image: womenCanvas,
    category: "Casual",
    gender: "women",
    description: "Comfortable flats for everyday wear. Simple, elegant design that pairs with any outfit. Soft leather upper and cushioned insole ensure comfort from morning to night.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Beige", "Black", "Silver"]
  },
];
