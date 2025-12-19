import { Smartphone, Zap, Sparkles, Monitor } from 'lucide-react';
import { Product, Category, TeamMember } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Phones', icon: Smartphone },
  { id: 2, name: 'Vapes', icon: Zap },
  { id: 3, name: 'Fireworks', icon: Sparkles },
  { id: 4, name: 'Electronics', icon: Monitor },
];

export const FLASH_SALES: Product[] = [
  { id: 1, name: 'iPhone 17 Pro Max 512GB', price: 1499, originalPrice: 1799, rating: 5, reviews: 245, image: '/phone/download (1).jpeg', discount: 17 },
  { id: 9, name: 'Samsung Galaxy S24 Ultra', price: 1199, originalPrice: 1399, rating: 5, reviews: 189, image: '/phone/download (4).jpeg', discount: 14 },
  { id: 3, name: 'Premium Vape Kit Bundle', price: 79, originalPrice: 120, rating: 4.5, reviews: 87, image: '/Vapes/Bundles/Picture1.png', discount: 34 },
  { id: 30, name: 'Wholesale Barrage Pack', price: 899, rating: 5, reviews: 45, image: '/Best seller fireworks/Las Vegas Crate.png' },
  { id: 73, name: 'Power Bank 20000mAh Fast Charge', price: 49, rating: 5, reviews: 567, image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

export const BEST_SELLING: Product[] = [
  { id: 10, name: 'Samsung Galaxy S23 Ultra', price: 899, originalPrice: 1199, rating: 5, reviews: 132, image: '/phone/download (5).jpeg', discount: 25 },
  { id: 3, name: 'Premium Vape Kit Bundle', price: 79, originalPrice: 120, rating: 4.5, reviews: 87, image: '/Vapes/Bundles/Picture1.png', discount: 34 },
  { id: 2, name: 'iPhone 16 Pro 256GB', price: 1099, originalPrice: 1299, rating: 5, reviews: 178, image: '/phone/download (2).jpeg', discount: 15 },
  { id: 29, name: 'Bulk Rocket Pack 50pcs', price: 550, rating: 5, reviews: 34, image: '/Best seller fireworks/Sky Raider (£3.00 each).png' },
  { id: 17, name: 'Wireless Gaming Controller Pro', price: 79, originalPrice: 99, rating: 4.5, reviews: 245, image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', discount: 20 },
];

export const EXPLORE_PRODUCTS: Product[] = [
  { id: 1, name: 'iPhone 17 Pro Max 512GB', price: 1499, originalPrice: 1799, rating: 5, reviews: 245, image: '/phone/download (1).jpeg', discount: 17, isNew: true },
  { id: 10, name: 'Samsung Galaxy S23 Ultra', price: 899, originalPrice: 1199, rating: 5, reviews: 132, image: '/phone/download (5).jpeg', discount: 25 },
  { id: 3, name: 'Premium Vape Kit Bundle', price: 79, originalPrice: 120, rating: 4.5, reviews: 87, image: '/Vapes/Bundles/Picture1.png', discount: 34 },
  { id: 38, name: 'Complete Vape Bundle Set', price: 149, rating: 4.5, reviews: 89, image: '/Vapes/Bundles/Picture1.png', isNew: true },
  { id: 29, name: 'Bulk Rocket Pack 50pcs', price: 550, rating: 5, reviews: 34, image: '/Best seller fireworks/Sky Raider (£3.00 each).png' },
  { id: 30, name: 'Wholesale Barrage Pack', price: 899, rating: 5, reviews: 45, image: '/Best seller fireworks/Las Vegas Crate.png' },
  { id: 17, name: 'Wireless Gaming Controller Pro', price: 79, originalPrice: 99, rating: 4.5, reviews: 245, image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', discount: 20 },
  { id: 19, name: 'Mechanical Gaming Keyboard RGB', price: 159, rating: 5, reviews: 189, image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true },
];

export const ALL_PRODUCTS: Product[] = [
  // PHONES CATEGORY
  { id: 1, name: 'iPhone 17 Pro Max 512GB', price: 1499, originalPrice: 1799, rating: 5, reviews: 245, image: '/phone/download (1).jpeg', discount: 17, isNew: true, category: 'Phones' },
  { id: 2, name: 'iPhone 16 Pro 256GB', price: 1099, originalPrice: 1299, rating: 5, reviews: 178, image: '/phone/download (2).jpeg', discount: 15, category: 'Phones' },
  { id: 5, name: 'iPhone 15 Pro 512GB', price: 1399, rating: 5, reviews: 234, image: '/phone/download (3).jpeg', category: 'Phones' },
  { id: 7, name: 'iPhone 14 Pro Max 256GB', price: 999, originalPrice: 1299, rating: 5, reviews: 145, image: '/phone/download.jpeg', discount: 23, category: 'Phones' },
  { id: 9, name: 'Samsung Galaxy S24 Ultra', price: 1199, originalPrice: 1399, rating: 5, reviews: 189, image: '/phone/download (4).jpeg', discount: 14, category: 'Phones' },
  { id: 10, name: 'Samsung Galaxy S23 Ultra', price: 899, originalPrice: 1199, rating: 5, reviews: 132, image: '/phone/download (5).jpeg', discount: 25, category: 'Phones' },
  { id: 14, name: 'Samsung Galaxy S22 Ultra', price: 799, originalPrice: 999, rating: 5, reviews: 156, image: '/phone/download (6).jpeg', discount: 20, category: 'Phones' },

  // VAPES CATEGORY - BUNDLES
  { id: 3, name: 'Premium Vape Kit Bundle', price: 79, originalPrice: 120, rating: 4.5, reviews: 87, image: '/Vapes/Bundles/Picture1.png', discount: 34, category: 'Vapes', subCategory: 'Bundles' },
  { id: 37, name: 'Starter Bundle Pack', price: 99, rating: 5, reviews: 124, image: '/Vapes/Bundles/Picture1.png', category: 'Vapes', subCategory: 'Bundles' },
  { id: 38, name: 'Complete Vape Bundle Set', price: 149, rating: 4.5, reviews: 89, image: '/Vapes/Bundles/Picture1.png', isNew: true, category: 'Vapes', subCategory: 'Bundles' },
  
  // VAPES - COILS & PODS
  { id: 25, name: 'Vape Coil Pack - 5 Pack', price: 25, rating: 4.5, reviews: 145, image: '/Vapes/Coils & Pods/Picture1.png', category: 'Vapes', subCategory: 'Coils & Pods' },
  { id: 39, name: 'Replacement Pod Pack', price: 18, rating: 4, reviews: 178, image: '/Vapes/Coils & Pods/Picture1.png', category: 'Vapes', subCategory: 'Coils & Pods' },
  { id: 40, name: 'Premium Mesh Coils', price: 35, rating: 5, reviews: 203, image: '/Vapes/Coils & Pods/Picture1.png', category: 'Vapes', subCategory: 'Coils & Pods' },

  // VAPES - NIC SALTS
  { id: 15, name: 'Premium E-Liquid Collection', price: 55, rating: 5, reviews: 167, image: '/Vapes/Nic Salts/Picture1.png', isNew: true, colors: ['#00FF00', '#0000FF'], category: 'Vapes', subCategory: 'Nic Salts' },
  { id: 41, name: 'Tropical Nic Salt 20mg', price: 12, rating: 4.5, reviews: 145, image: '/Vapes/Nic Salts/Picture1.png', category: 'Vapes', subCategory: 'Nic Salts' },
  { id: 42, name: 'Menthol Ice Nic Salt', price: 12, rating: 4.5, reviews: 167, image: '/Vapes/Nic Salts/Picture1.png', category: 'Vapes', subCategory: 'Nic Salts' },
  { id: 43, name: 'Berry Mix Nic Salt', price: 12, rating: 5, reviews: 189, image: '/Vapes/Nic Salts/Picture1.png', category: 'Vapes', subCategory: 'Nic Salts' },

  // VAPES - NICOTINE POUCHES
  { id: 44, name: 'Cool Mint Pouches 20mg', price: 8, rating: 4.5, reviews: 234, image: '/Vapes/Nicotine Pouches/Picture1.png', category: 'Vapes', subCategory: 'Nicotine Pouches' },
  { id: 45, name: 'Citrus Blast Pouches', price: 8, rating: 4, reviews: 156, image: '/Vapes/Nicotine Pouches/Picture1.png', category: 'Vapes', subCategory: 'Nicotine Pouches' },
  { id: 46, name: 'Arctic Freeze Pouches', price: 9, rating: 5, reviews: 198, image: '/Vapes/Nicotine Pouches/Picture1.png', isNew: true, category: 'Vapes', subCategory: 'Nicotine Pouches' },

  // VAPES - PREFILLED PODS
  { id: 11, name: 'Lost Mary BM6000 Prefilled Pods', price: 35, rating: 4, reviews: 124, image: '/Vapes/Prefilled Pods/lost-mary-bm6000-prefilled-pods_grande_b1704b02-4cf3-40d1-b8d3-e9e736981544_720x.webp', category: 'Vapes', subCategory: 'Prefilled Pods' },
  { id: 47, name: 'Crystal Galaxy Focus 2 30K Pods', price: 22, rating: 4.5, reviews: 167, image: '/Vapes/Prefilled Pods/CRYSTAL-GALAXY-30K-FOCUS-2-PREFILLED-PODS-20MG_720x.webp', category: 'Vapes', subCategory: 'Prefilled Pods' },
  { id: 48, name: 'Hayati Pro Max Plus Pods', price: 22, rating: 4.5, reviews: 145, image: '/Vapes/Prefilled Pods/hayati-pro-max-plus-6000-refill-pods_720x.webp', category: 'Vapes', subCategory: 'Prefilled Pods' },

  // VAPES - PREFILLED VAPE KITS
  { id: 12, name: 'Crystal Galaxy Focus 2 30K Kit', price: 89, rating: 4.5, reviews: 201, image: '/Vapes/Prefilled Vape Kits/CRYSTAL-GALAXY-FOCUS-2-30K-DISPOSABLE-VAPE-KIT-20MG-scaled_720x.webp', category: 'Vapes', subCategory: 'Prefilled Vape Kits' },
  { id: 49, name: 'Lost Mary Nera 15K Kit', price: 45, rating: 5, reviews: 234, image: '/Vapes/Prefilled Vape Kits/Lost_Mary_Nera_Fullview_Prefilled_Pod_Kit_720x.webp', category: 'Vapes', subCategory: 'Prefilled Vape Kits' },
  { id: 50, name: 'Hayati Ultra 25K Kit', price: 39, rating: 4.5, reviews: 178, image: '/Vapes/Prefilled Vape Kits/Hayati_ultra_25k_720x.webp', isNew: true, category: 'Vapes', subCategory: 'Prefilled Vape Kits' },

  // VAPES - SAVACCO
  { id: 51, name: 'Savacco Classic Series', price: 55, rating: 5, reviews: 123, image: '/Vapes/Savacco/Picture1.png', category: 'Vapes', subCategory: 'Savacco' },
  { id: 52, name: 'Savacco Premium Line', price: 65, rating: 5, reviews: 145, image: '/Vapes/Savacco/Picture1.png', category: 'Vapes', subCategory: 'Savacco' },

  // VAPES - SHORT FILLS
  { id: 53, name: 'Strawberry Shortfill 100ml', price: 18, rating: 4.5, reviews: 189, image: '/Vapes/Short Fills/Picture1.png', category: 'Vapes', subCategory: 'Short Fills' },
  { id: 54, name: 'Blue Raspberry 100ml', price: 18, rating: 4.5, reviews: 167, image: '/Vapes/Short Fills/Picture1.png', category: 'Vapes', subCategory: 'Short Fills' },
  { id: 55, name: 'Peach Ice Tea 100ml', price: 20, rating: 5, reviews: 234, image: '/Vapes/Short Fills/Picture1.png', isNew: true, category: 'Vapes', subCategory: 'Short Fills' },

  // VAPES - VAPE KITS
  { id: 6, name: 'Rechargeable Vape Device', price: 45, originalPrice: 65, rating: 4.5, reviews: 156, image: '/Vapes/Vape Kits/Picture1.png', category: 'Vapes', subCategory: 'Vape Kits' },
  { id: 24, name: 'Advanced Vape Mod Kit', price: 129, rating: 5, reviews: 98, image: '/Vapes/Vape Kits/Picture1.png', category: 'Vapes', subCategory: 'Vape Kits' },
  { id: 26, name: 'Portable Vape Charger', price: 19, rating: 4, reviews: 78, image: '/Vapes/Vape Kits/Picture1.png', category: 'Vapes', subCategory: 'Vape Kits' },
  { id: 56, name: 'Professional Vape Kit Pro', price: 199, rating: 5, reviews: 289, image: '/Vapes/Vape Kits/Picture1.png', isNew: true, category: 'Vapes', subCategory: 'Vape Kits' },

  // FIREWORKS CATEGORY - CAKES & BARRAGES
  { id: 4, name: 'Las Vegas Crate Display', price: 299, originalPrice: 450, rating: 5, reviews: 64, image: '/Best seller fireworks/Las Vegas Crate.png', discount: 34, category: 'Fireworks', subCategory: 'Cakes & Barrages' },
  { id: 57, name: 'Frosty Snowman Barrage', price: 189, rating: 5, reviews: 72, image: '/Best seller fireworks/Frosty The Snowman.png', category: 'Fireworks', subCategory: 'Cakes & Barrages' },
  { id: 58, name: 'Multi-Shot Cake 25 Shots', price: 245, rating: 4.5, reviews: 88, image: '/Best seller fireworks/Las Vegas Crate.png', category: 'Fireworks', subCategory: 'Cakes & Barrages' },

  // FIREWORKS - ROCKETS
  { id: 8, name: 'Sky Raider Rockets', price: 189, rating: 5, reviews: 72, image: '/Best seller fireworks/Sky Raider (£3.00 each).png', category: 'Fireworks', subCategory: 'Rockets' },
  { id: 59, name: 'Falcon Power Rockets', price: 125, rating: 4.5, reviews: 91, image: '/Best seller fireworks/Falcons (£6.00 each).png', category: 'Fireworks', subCategory: 'Rockets' },
  { id: 60, name: 'Mega Rocket Pack 10pcs', price: 175, rating: 5, reviews: 67, image: '/Best seller fireworks/Sky Raider (£3.00 each).png', category: 'Fireworks', subCategory: 'Rockets' },

  // FIREWORKS - BOXES & PACKS
  { id: 13, name: 'The Mob Selection Box', price: 450, rating: 5, reviews: 43, image: '/Best seller fireworks/The Mob Box (£7.99 each).png', isNew: true, category: 'Fireworks', subCategory: 'Boxes & Packs' },
  { id: 61, name: 'Ultimate Party Pack', price: 550, rating: 5, reviews: 34, image: '/Best seller fireworks/Las Vegas Crate.png', isNew: true, category: 'Fireworks', subCategory: 'Boxes & Packs' },
  { id: 62, name: 'Family Selection Box', price: 295, rating: 4.5, reviews: 56, image: '/Best seller fireworks/Frosty The Snowman.png', category: 'Fireworks', subCategory: 'Boxes & Packs' },

  // FIREWORKS - COMPLETE DISPLAYS
  { id: 16, name: 'Complete Display Package', price: 899, rating: 5, reviews: 45, image: '/Best seller fireworks/Las Vegas Crate.png', category: 'Fireworks', subCategory: 'Complete Displays' },
  { id: 63, name: 'Professional Display Kit', price: 1299, rating: 5, reviews: 28, image: '/Best seller fireworks/The Mob Box (£7.99 each).png', isNew: true, category: 'Fireworks', subCategory: 'Complete Displays' },
  { id: 64, name: 'Wedding Display Package', price: 1599, rating: 5, reviews: 19, image: '/Best seller fireworks/Frosty The Snowman.png', category: 'Fireworks', subCategory: 'Complete Displays' },

  // FIREWORKS - OTHER PYRO
  { id: 27, name: 'Sparkler Party Pack 50pcs', price: 35, rating: 5, reviews: 156, image: '/Best seller fireworks/Falcons (£6.00 each).png', category: 'Fireworks', subCategory: 'Other Pyro' },
  { id: 65, name: 'Smoke Bombs Color Mix', price: 45, rating: 4.5, reviews: 134, image: '/Best seller fireworks/Sky Raider (£3.00 each).png', category: 'Fireworks', subCategory: 'Other Pyro' },
  { id: 66, name: 'Thunder Flash Pack', price: 55, rating: 4.5, reviews: 98, image: '/Best seller fireworks/The Mob Box (£7.99 each).png', category: 'Fireworks', subCategory: 'Other Pyro' },

  // FIREWORKS - NONE PYRO
  { id: 67, name: 'LED Party Lights', price: 25, rating: 4, reviews: 234, image: '/Best seller fireworks/Frosty The Snowman.png', category: 'Fireworks', subCategory: 'None Pyro' },
  { id: 68, name: 'Confetti Cannons 6-Pack', price: 35, rating: 4.5, reviews: 178, image: '/Best seller fireworks/Las Vegas Crate.png', category: 'Fireworks', subCategory: 'None Pyro' },

  // FIREWORKS - OFFERS
  { id: 28, name: 'Special Offer Bundle', price: 175, originalPrice: 250, rating: 4.5, reviews: 67, image: '/Best seller fireworks/The Mob Box (£7.99 each).png', discount: 30, category: 'Fireworks', subCategory: 'Offers' },
  { id: 69, name: 'Clearance Display Pack', price: 199, originalPrice: 350, rating: 4.5, reviews: 45, image: '/Best seller fireworks/Falcons (£6.00 each).png', discount: 43, category: 'Fireworks', subCategory: 'Offers' },

  // FIREWORKS - BULK BUY
  { id: 29, name: 'Bulk Rocket Pack 50pcs', price: 550, rating: 5, reviews: 34, image: '/Best seller fireworks/Sky Raider (£3.00 each).png', category: 'Fireworks', subCategory: 'Bulk Buy' },
  { id: 30, name: 'Wholesale Barrage Pack', price: 899, rating: 5, reviews: 45, image: '/Best seller fireworks/Las Vegas Crate.png', category: 'Fireworks', subCategory: 'Bulk Buy' },
  { id: 70, name: 'Trade Pack - Mixed', price: 1499, rating: 5, reviews: 23, image: '/Best seller fireworks/Frosty The Snowman.png', isNew: true, category: 'Fireworks', subCategory: 'Bulk Buy' },

  // ELECTRONICS - GAMING ACCESSORIES
  { id: 17, name: 'Wireless Gaming Controller Pro', price: 79, originalPrice: 99, rating: 4.5, reviews: 245, image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', discount: 20, category: 'Electronics', subCategory: 'Gaming Accessories' },
  { id: 18, name: 'Wireless Gaming Headset RGB', price: 129, originalPrice: 179, rating: 4.5, reviews: 345, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', discount: 28, category: 'Electronics', subCategory: 'Gaming Accessories' },
  { id: 71, name: 'Gaming Joystick Flight Stick', price: 149, rating: 5, reviews: 189, image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Gaming Accessories' },
  { id: 72, name: 'VR Headset Stand', price: 29, rating: 4, reviews: 123, image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Gaming Accessories' },
  
  // ELECTRONICS - POWER BANKS
  { id: 73, name: 'Power Bank 20000mAh Fast Charge', price: 49, rating: 5, reviews: 567, image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Power Banks' },
  
  // ELECTRONICS - CHARGERS & CABLES
  { id: 77, name: 'USB-C Fast Charger 65W', price: 35, rating: 5, reviews: 456, image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Chargers & Cables' },
  { id: 78, name: 'Multi-Port USB Charger 6 Ports', price: 45, rating: 4.5, reviews: 234, image: 'https://images.pexels.com/photos/5081400/pexels-photo-5081400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Chargers & Cables' },
  { id: 79, name: 'Braided USB-C Cable 2m', price: 15, rating: 4.5, reviews: 678, image: 'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Chargers & Cables' },
  { id: 80, name: 'Wireless Car Charger Mount', price: 39, rating: 4, reviews: 234, image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Chargers & Cables' },
  
  // ELECTRONICS - KEYBOARDS & MICE
  { id: 19, name: 'Mechanical Gaming Keyboard RGB', price: 159, rating: 5, reviews: 389, image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Keyboards & Mice' },
  { id: 20, name: 'Wireless Mouse Gaming Pro', price: 79, rating: 4.5, reviews: 256, image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Keyboards & Mice' },
  { id: 81, name: 'Ergonomic Wireless Keyboard', price: 89, rating: 4.5, reviews: 345, image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Keyboards & Mice' },
  { id: 82, name: 'Vertical Ergonomic Mouse', price: 45, rating: 4, reviews: 178, image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Keyboards & Mice' },
  
  // ELECTRONICS - AUDIO DEVICES
  { id: 34, name: 'Bluetooth Speaker Waterproof', price: 69, rating: 4.5, reviews: 445, image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Audio Devices' },
  { id: 35, name: 'Wireless Earbuds Pro', price: 149, rating: 5, reviews: 556, image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Audio Devices' },
  { id: 83, name: 'Studio Monitor Speakers Pair', price: 299, rating: 5, reviews: 167, image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Audio Devices' },
  { id: 84, name: 'USB Microphone Podcast Kit', price: 129, rating: 4.5, reviews: 234, image: 'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Audio Devices' },
  
  // ELECTRONICS - STORAGE & HUBS
  { id: 31, name: 'USB-C Hub 7-in-1', price: 45, rating: 4.5, reviews: 334, image: 'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Storage & Hubs' },
  { id: 33, name: 'Portable SSD 1TB', price: 129, rating: 5, reviews: 367, image: 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Storage & Hubs' },
  { id: 85, name: 'External Hard Drive 4TB', price: 99, rating: 4.5, reviews: 456, image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Storage & Hubs' },
  { id: 86, name: 'USB 3.0 Flash Drive 256GB', price: 35, rating: 4, reviews: 234, image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Storage & Hubs' },
  
  // ELECTRONICS - MONITORS & DISPLAYS
  { id: 87, name: '4K Gaming Monitor 32"', price: 449, originalPrice: 599, rating: 5, reviews: 310, image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', discount: 25, category: 'Electronics', subCategory: 'Monitors & Displays' },
  { id: 88, name: 'Ultrawide Monitor 34" Curved', price: 599, rating: 5, reviews: 234, image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Monitors & Displays' },
  { id: 89, name: 'Portable Monitor 15.6" USB-C', price: 199, rating: 4.5, reviews: 189, image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Monitors & Displays' },
  { id: 90, name: 'Monitor Stand Dual Arm', price: 79, rating: 4, reviews: 145, image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Monitors & Displays' },
  
  // ELECTRONICS - CAMERAS & WEBCAMS
  { id: 32, name: 'Webcam 1080p HD', price: 89, rating: 4, reviews: 278, image: 'https://images.pexels.com/photos/5721918/pexels-photo-5721918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Cameras & Webcams' },
  { id: 91, name: 'Webcam 4K Pro Streaming', price: 179, rating: 5, reviews: 234, image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', isNew: true, category: 'Electronics', subCategory: 'Cameras & Webcams' },
  { id: 92, name: 'Ring Light with Tripod', price: 55, rating: 4.5, reviews: 456, image: 'https://images.pexels.com/photos/4488653/pexels-photo-4488653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Cameras & Webcams' },
  { id: 93, name: 'Green Screen Background Kit', price: 45, rating: 4, reviews: 189, image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Electronics', subCategory: 'Cameras & Webcams' },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: 'Tom Cruise', role: 'Founder & Chairman', image: 'https://images.pexels.com/photos/1005/pexels-photo-1005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, name: 'Emma Watson', role: 'Managing Director', image: 'https://images.pexels.com/photos/1011/pexels-photo-1011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, name: 'Will Smith', role: 'Product Designer', image: 'https://images.pexels.com/photos/1012/pexels-photo-1012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];