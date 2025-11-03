// Women's shoes images
import womenRunning from "@assets/stock_images/women's_athletic_run_c8c8624c.jpg";
import womenHeels1 from "@assets/stock_images/women's_elegant_high_a5e3fb31.jpg";
import womenHeels2 from "@assets/stock_images/elegant_women's_high_be1e736f.jpg";
import womenHeels3 from "@assets/stock_images/elegant_women's_high_ec766691.jpg";
import womenHeels4 from "@assets/stock_images/elegant_women's_high_3030fc6a.jpg";
import womenBoots1 from "@assets/stock_images/women's_fashion_boot_670e108d.jpg";
import womenBoots2 from "@assets/stock_images/women's_fashion_boot_70f84688.jpg";
import womenCanvas from "@assets/stock_images/women's_canvas_sneak_9042922f.jpg";
import womenSneakers1 from "@assets/stock_images/women's_casual_sneak_6534419b.jpg";
import womenSneakers2 from "@assets/stock_images/women's_casual_sneak_c62dc785.jpg";
import womenSneakers3 from "@assets/stock_images/women's_casual_sneak_7f32081a.jpg";

// Men's shoes images
import menBoots from "@assets/stock_images/men's_leather_boots_5e633b73.jpg";
import menDress1 from "@assets/stock_images/men's_dress_shoes_fo_3c2d038a.jpg";
import menDress2 from "@assets/stock_images/men's_dress_shoes_fo_76e2c5f6.jpg";
import menDress3 from "@assets/stock_images/men's_dress_shoes_fo_2d3231a9.jpg";
import menCasual1 from "@assets/stock_images/men's_casual_sneaker_e9373d94.jpg";
import menCasual2 from "@assets/stock_images/men's_casual_sneaker_c8636b0b.jpg";
import menCasual3 from "@assets/stock_images/men's_casual_sneaker_0393f5f0.jpg";
import menRunning1 from "@assets/stock_images/men's_athletic_runni_dbb73c15.jpg";
import menRunning2 from "@assets/stock_images/men's_athletic_runni_63efcd1f.jpg";
import menHiking1 from "@assets/stock_images/men's_boots_hiking_b2849a17.jpg";
import menHiking2 from "@assets/stock_images/men's_boots_hiking_5bbf3851.jpg";

// Kids shoes images
import kidsSneakers from "@assets/stock_images/kids_colorful_sneake_9d2962b4.jpg";
import kidsBoys1 from "@assets/stock_images/kids_boys_sneakers_c9e2116d.jpg";
import kidsBoys2 from "@assets/stock_images/kids_boys_sneakers_9c7a2b97.jpg";
import kidsBoys3 from "@assets/stock_images/kids_boys_sneakers_fbba8e70.jpg";
import kidsGirls1 from "@assets/stock_images/kids_girls_shoes_3c30c467.jpg";
import kidsGirls2 from "@assets/stock_images/kids_girls_shoes_d9c157af.jpg";
import kidsGirls3 from "@assets/stock_images/kids_girls_shoes_b167ee54.jpg";
import kidsAthletic1 from "@assets/stock_images/kids_athletic_shoes_ce9d07a5.jpg";
import kidsAthletic2 from "@assets/stock_images/kids_athletic_shoes_c9a6616c.jpg";
import kidsCasual1 from "@assets/stock_images/kids_casual_shoes_2f275784.jpg";
import kidsCasual2 from "@assets/stock_images/kids_casual_shoes_2889c6fc.jpg";

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
  // ========== WOMEN'S SHOES (10 items) ==========
  {
    id: "w1",
    name: "Women's Athletic Running Shoes",
    price: 89.99,
    image: womenRunning,
    category: "Athletic",
    gender: "women",
    description: "High-performance running shoes with superior cushioning and support for your active lifestyle. Features breathable mesh upper and responsive foam midsole for maximum comfort during long runs.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["Pink", "Blue", "Black"]
  },
  {
    id: "w2",
    name: "Women's Classic Stiletto Heels",
    price: 79.99,
    image: womenHeels1,
    category: "Heels",
    gender: "women",
    description: "Elegant stiletto heels perfect for any formal occasion. Comfortable fit with timeless style. Padded insole ensures all-day comfort while maintaining a sophisticated look.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Nude", "Black", "Red"]
  },
  {
    id: "w3",
    name: "Women's Platform Heels",
    price: 94.99,
    image: womenHeels2,
    category: "Heels",
    gender: "women",
    description: "Stylish platform heels with extra height and stability. Perfect for parties and special events. The platform design provides comfort without sacrificing elegance.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["Silver", "Gold", "Black"]
  },
  {
    id: "w4",
    name: "Women's Block Heel Pumps",
    price: 84.99,
    image: womenHeels3,
    category: "Heels",
    gender: "women",
    description: "Comfortable block heel pumps ideal for office wear. Stable heel design offers all-day wearability. Professional look with modern comfort technology.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Navy", "Burgundy", "Black"]
  },
  {
    id: "w5",
    name: "Women's Strappy Heels",
    price: 99.99,
    image: womenHeels4,
    category: "Heels",
    gender: "women",
    description: "Elegant strappy heels with delicate design. Perfect for weddings and formal events. Ankle strap provides extra support and adds a touch of sophistication.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9],
    colors: ["Rose Gold", "Silver", "Champagne"]
  },
  {
    id: "w6",
    name: "Women's Ankle Boots",
    price: 119.99,
    image: womenBoots1,
    category: "Boots",
    gender: "women",
    description: "Trendy ankle boots perfect for fall and winter. Premium materials with comfortable fit. Versatile design pairs well with jeans or dresses.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: "w7",
    name: "Women's Knee-High Boots",
    price: 139.99,
    image: womenBoots2,
    category: "Boots",
    gender: "women",
    description: "Elegant knee-high boots with sleek silhouette. Side zipper for easy on and off. Soft inner lining keeps feet warm and comfortable all day.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["Black", "Chocolate", "Grey"]
  },
  {
    id: "w8",
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
    id: "w9",
    name: "Women's Fashion Sneakers",
    price: 74.99,
    image: womenSneakers1,
    category: "Sneakers",
    gender: "women",
    description: "Trendy fashion sneakers with modern design. Perfect blend of style and comfort. Memory foam insole provides exceptional cushioning.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    colors: ["White", "Pink", "Grey"]
  },
  {
    id: "w10",
    name: "Women's Slip-On Sneakers",
    price: 64.99,
    image: womenSneakers2,
    category: "Sneakers",
    gender: "women",
    description: "Easy slip-on sneakers for casual everyday wear. No-tie design with elastic panels. Comfortable padded collar and breathable mesh lining.",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    colors: ["Black", "Grey", "Beige"]
  },

  // ========== MEN'S SHOES (10 items) ==========
  {
    id: "m1",
    name: "Men's Leather Oxford Shoes",
    price: 129.99,
    image: menDress1,
    category: "Dress",
    gender: "men",
    description: "Classic leather Oxford shoes for professional occasions. Premium leather construction with cushioned insole. Perfect for business meetings and formal events.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Brown", "Burgundy"]
  },
  {
    id: "m2",
    name: "Men's Derby Dress Shoes",
    price: 119.99,
    image: menDress2,
    category: "Dress",
    gender: "men",
    description: "Elegant Derby shoes with timeless design. Hand-stitched details and premium leather. Versatile style suitable for office or special occasions.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Dark Brown", "Tan"]
  },
  {
    id: "m3",
    name: "Men's Loafers",
    price: 99.99,
    image: menDress3,
    category: "Casual",
    gender: "men",
    description: "Comfortable slip-on loafers for smart casual wear. Soft leather upper with flexible sole. Easy to wear and perfect for business casual settings.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Black", "Brown", "Navy"]
  },
  {
    id: "m4",
    name: "Men's Casual Sneakers",
    price: 84.99,
    image: menCasual1,
    category: "Sneakers",
    gender: "men",
    description: "Versatile casual sneakers for everyday wear. Breathable fabric with cushioned midsole. Modern design that pairs well with jeans or chinos.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["White", "Grey", "Navy"]
  },
  {
    id: "m5",
    name: "Men's Canvas Sneakers",
    price: 69.99,
    image: menCasual2,
    category: "Sneakers",
    gender: "men",
    description: "Classic canvas sneakers with vintage appeal. Lightweight and breathable construction. Rubber toe cap for durability and style.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "White", "Olive"]
  },
  {
    id: "m6",
    name: "Men's Retro Sneakers",
    price: 94.99,
    image: menCasual3,
    category: "Sneakers",
    gender: "men",
    description: "Stylish retro-inspired sneakers with modern comfort. Premium suede and mesh combination. Padded tongue and collar for extra comfort.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Blue", "Red", "Black"]
  },
  {
    id: "m7",
    name: "Men's Performance Running Shoes",
    price: 109.99,
    image: menRunning1,
    category: "Athletic",
    gender: "men",
    description: "Advanced running shoes with superior shock absorption. Engineered mesh provides ventilation while maintaining support. Reflective elements for visibility.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Black", "Blue", "Grey"]
  },
  {
    id: "m8",
    name: "Men's Trail Running Shoes",
    price: 124.99,
    image: menRunning2,
    category: "Athletic",
    gender: "men",
    description: "Rugged trail running shoes for outdoor adventures. Aggressive tread pattern for superior traction. Water-resistant upper protects against elements.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Black", "Orange", "Green"]
  },
  {
    id: "m9",
    name: "Men's Hiking Boots",
    price: 149.99,
    image: menHiking1,
    category: "Boots",
    gender: "men",
    description: "Durable hiking boots built for tough terrain. Waterproof construction with ankle support. Vibram sole provides excellent grip on various surfaces.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: ["Brown", "Black", "Olive"]
  },
  {
    id: "m10",
    name: "Men's Work Boots",
    price: 139.99,
    image: menBoots,
    category: "Boots",
    gender: "men",
    description: "Heavy-duty work boots with steel toe protection. Oil-resistant outsole for safety. Comfortable all-day wear with cushioned footbed.",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: ["Brown", "Black", "Tan"]
  },

  // ========== KIDS' SHOES (10 items) ==========
  {
    id: "k1",
    name: "Kids Colorful Light-Up Sneakers",
    price: 49.99,
    image: kidsSneakers,
    category: "Sneakers",
    gender: "kids",
    description: "Fun light-up sneakers that kids love! Durable construction with LED lights. Easy velcro closure for independent wear. Non-slip sole for safety.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Multi", "Blue", "Pink"]
  },
  {
    id: "k2",
    name: "Boys' Athletic Sneakers",
    price: 54.99,
    image: kidsBoys1,
    category: "Sneakers",
    gender: "kids",
    description: "Durable athletic sneakers for active boys. Reinforced toe cap withstands rough play. Breathable mesh keeps feet cool during activities.",
    sizes: [10, 11, 12, 13, 1, 2, 3, 4],
    colors: ["Blue", "Black", "Red"]
  },
  {
    id: "k3",
    name: "Boys' Running Shoes",
    price: 59.99,
    image: kidsBoys2,
    category: "Athletic",
    gender: "kids",
    description: "Performance running shoes for young athletes. Lightweight design with excellent cushioning. Supportive fit helps prevent injuries during sports.",
    sizes: [11, 12, 13, 1, 2, 3, 4],
    colors: ["Black", "Green", "Orange"]
  },
  {
    id: "k4",
    name: "Boys' Casual Sneakers",
    price: 44.99,
    image: kidsBoys3,
    category: "Casual",
    gender: "kids",
    description: "Comfortable everyday sneakers for school and play. Easy slip-on design with elastic laces. Durable rubber sole handles active lifestyles.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Navy", "Grey", "Black"]
  },
  {
    id: "k5",
    name: "Girls' Princess Shoes",
    price: 39.99,
    image: kidsGirls1,
    category: "Dress",
    gender: "kids",
    description: "Adorable princess-style shoes for special occasions. Sparkly details that little girls adore. Comfortable fit for parties and events.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Pink", "Silver", "Purple"]
  },
  {
    id: "k6",
    name: "Girls' Mary Jane Shoes",
    price: 44.99,
    image: kidsGirls2,
    category: "Dress",
    gender: "kids",
    description: "Classic Mary Jane style for dress occasions. Easy strap closure for quick on and off. Soft cushioned insole for all-day comfort.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Black", "Red", "White"]
  },
  {
    id: "k7",
    name: "Girls' Fashion Sneakers",
    price: 49.99,
    image: kidsGirls3,
    category: "Sneakers",
    gender: "kids",
    description: "Trendy fashion sneakers with fun designs. Comfortable and stylish for everyday wear. Durable construction stands up to active play.",
    sizes: [10, 11, 12, 13, 1, 2, 3, 4],
    colors: ["Pink", "Purple", "White"]
  },
  {
    id: "k8",
    name: "Kids Sport Training Shoes",
    price: 54.99,
    image: kidsAthletic1,
    category: "Athletic",
    gender: "kids",
    description: "All-purpose sport shoes for various activities. Great traction and ankle support. Breathable material keeps feet dry during exercise.",
    sizes: [11, 12, 13, 1, 2, 3, 4],
    colors: ["Black", "Blue", "White"]
  },
  {
    id: "k9",
    name: "Kids Basketball Shoes",
    price: 64.99,
    image: kidsAthletic2,
    category: "Athletic",
    gender: "kids",
    description: "High-top basketball shoes with ankle support. Cushioned midsole for jump protection. Non-marking rubber sole perfect for indoor courts.",
    sizes: [12, 13, 1, 2, 3, 4, 5],
    colors: ["Black", "Red", "Blue"]
  },
  {
    id: "k10",
    name: "Kids Casual Canvas Shoes",
    price: 34.99,
    image: kidsCasual1,
    category: "Casual",
    gender: "kids",
    description: "Lightweight canvas shoes for everyday comfort. Easy to clean and maintain. Fun colors that kids love to wear.",
    sizes: [10, 11, 12, 13, 1, 2, 3],
    colors: ["Blue", "Pink", "Grey"]
  },
];
