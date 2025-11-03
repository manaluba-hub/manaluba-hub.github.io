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
    image: "/src/assets/product-1.jpg",
    category: "Athletic",
    gender: "women",
    description: "High-performance running shoes with superior cushioning and support for your active lifestyle.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["Blue", "Pink", "Black"]
  },
  {
    id: "2",
    name: "Women's Classic Heels",
    price: 79.99,
    image: "/src/assets/product-2.jpg",
    category: "Heels",
    gender: "women",
    description: "Elegant heels perfect for any formal occasion. Comfortable fit with timeless style.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Nude", "Black", "Red"]
  },
  {
    id: "3",
    name: "Kids Colorful Sneakers",
    price: 49.99,
    image: "/src/assets/product-3.jpg",
    category: "Sneakers",
    gender: "kids",
    description: "Fun and vibrant sneakers designed for active kids. Durable and comfortable for all-day play.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Multi", "Blue", "Pink"]
  },
  {
    id: "4",
    name: "Men's Leather Boots",
    price: 129.99,
    image: "/src/assets/product-4.jpg",
    category: "Boots",
    gender: "men",
    description: "Premium leather boots crafted for style and durability. Perfect for casual or business casual wear.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Brown", "Black", "Tan"]
  },
  {
    id: "5",
    name: "Women's Canvas Sneakers",
    price: 59.99,
    image: "/src/assets/product-5.jpg",
    category: "Sneakers",
    gender: "women",
    description: "Classic canvas sneakers that go with everything. Lightweight and breathable for everyday comfort.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["White", "Black", "Navy"]
  },
  {
    id: "6",
    name: "Men's Running Shoes",
    price: 94.99,
    image: "/src/assets/product-1.jpg",
    category: "Athletic",
    gender: "men",
    description: "Advanced running technology for maximum performance and comfort during your workouts.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Black", "Blue", "Red"]
  },
  {
    id: "7",
    name: "Kids Sport Shoes",
    price: 54.99,
    image: "/src/assets/product-3.jpg",
    category: "Athletic",
    gender: "kids",
    description: "Supportive athletic shoes designed for young athletes. Great traction and stability.",
    sizes: [10, 11, 12, 13, 1, 2, 3, 4],
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "8",
    name: "Women's Casual Flats",
    price: 64.99,
    image: "/src/assets/product-5.jpg",
    category: "Casual",
    gender: "women",
    description: "Comfortable flats for everyday wear. Simple, elegant design that pairs with any outfit.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Beige", "Black", "Silver"]
  },
];
