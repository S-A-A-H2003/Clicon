import img1 from './ImgProduct/Image.png';
import img2 from './ImgProduct/Image (1).png';
import img3 from './ImgProduct/Image1.jpg';
import img4 from './ImgProduct/d.jpg';
import img5 from './ImgProduct/d.jpg';
import img6 from './ImgProduct/ff.jpg';
import img7 from './ImgProduct/istockphoto-1693769417-612x612.webp';
import img8 from './ImgProduct/istockphoto-1693769417-612x612.webp';
import img9 from './ImgProduct/photo-1496181133206-80ce9b88a853.avif';
import img10 from './ImgProduct/photo-1499612657035-beb4431a3cdb.avif';
import img11 from './ImgProduct/photo-1522199755839-a2bacb67c546.avif';
import img12 from './ImgProduct/photo-1523275335684-37898b6baf30.avif';
import img13 from './ImgProduct/photo-1526170375885-4d8ecf77b99f.avif';
import img14 from './ImgProduct/photo-1529220182440-a217aedfe80d.avif';
import img15 from './ImgProduct/photo-1529653762956-b0a27278529c.avif';
import img16 from './ImgProduct/photo-1529653762956-b0a27278529c.avif';
import img17 from './ImgProduct/photo-1605899435973-ca2d1a8861cf.avif';
import img18 from './ImgProduct/photo-1611186871348-b1ce696e52c9.avif';
import img19 from './ImgProduct/photo-1621009063622-4467e453c3c1.avif';
import img20 from './ImgProduct/premium_photo-1680985551009-05107cd2752c.avif';
import img21 from './ImgProduct/premium_photo-1681160405580-a68e9c4707f9.avif';
import img22 from './ImgProduct/premium_photo-1681702156223-ea59bfbf1065.avif';
import img23 from './ImgProduct/yt.jpg';

export const Products: Products[] = [];

interface Products {
  id: number;
  Sku: string;
  items: string;
  productNames: string;
  description: string;
  promotionalTalk: string;
  price: number;
  priceBefor: number;
  offer: number;
  Shipping: number;
  Tax: number;
  pictures: {
    mainPicture: string;
    subPicture1: string;
    subPicture2: string;
    subPicture3: string;
    subPicture4: string;
    subPicture5: string;
    subPicture6: string;
  };
  Rating: {
    rate: number;
    userFeedBack: number;
    userFeedBackStart1: number;
    userFeedBackStart2: number;
    userFeedBackStart3: number;
    userFeedBackStart4: number;
    userFeedBackStart5: number;
  };
  userfeedback: number;
  Availability: string;
  brand: string;
  color: {
    color1: string;
    color2: string;
  };
  size: {
    size1: string;
    size2: string;
  };
  storage: {
    storage1: string;
    storage2: string;
  };
  memory: {
    memory1: string;
    memory2: string;
  };
  isWishlist: boolean;
  isAddToCard: boolean;
  isAddToCompare: boolean;
  category: string;
  isSale: boolean;
  isBestDeals: boolean;
  isHot: boolean;
  quentityInTheCart: number;
  isTop: boolean;
  isSoldOut: boolean;
}

const productNames = [
  "Apple MacBook Pro 14",
  "Dell XPS 13",
  "HP Spectre x360",
  "Samsung Galaxy S21",
  "Sony WH-1000XM4",
  "Apple iPhone 13",
  "Microsoft Surface Pro 7",
  "Asus ROG Zephyrus G14",
  "Bose QuietComfort 35 II",
  "GoPro HERO10",
  "Canon EOS R6",
  "Nikon Z6 II",
  "Apple Watch Series 7",
  "Fitbit Charge 5",
  "Garmin Forerunner 245"
];

const productImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23
];

const items = [
  'Laptop', 'Smartphone', 'Headphone', 'Camera', 'Smartwatch', 'Fitness Tracker', 
  'Gaming Console', 'Tablet', 'Wireless Charger', 'Portable Speaker'
];

for (let i = 1; i <= 500; i++) {
  const randomProductIndex = Math.floor(Math.random() * productNames.length);
  const randomItemsIndex = Math.floor(Math.random() * items.length);

  // Generate a more descriptive SKU based on the product category and index
  const brand = productNames[randomProductIndex].split(' ')[0]; // Extract brand from product name
  const category = items[randomItemsIndex];
  const sku = `${brand.slice(0, 3).toUpperCase()}-${category.slice(0, 3).toUpperCase()}-${i}`;
  Products.push({
    id: i,
    Sku: sku,
    items: items[randomItemsIndex],
    productNames: productNames[randomProductIndex],
    description: `Introducing the ${productNames[randomProductIndex]}, the perfect choice for all your needs.`,
    promotionalTalk: `Get your ${productNames[randomProductIndex]} today! Elevate your experience with this amazing product.`,
    price: Math.floor(Math.random() * 1000) + 100,
    priceBefor: Math.floor(Math.random() * 1000) + 100,
    offer: Math.random() < 0.5 ? Math.floor(Math.random() * 50) + 1 : 0,
    Shipping: Math.floor(Math.random() * 5) + 10,
    Tax: Math.floor(Math.random() * 1) + 10,
    pictures: {
      mainPicture: productImages[(randomProductIndex + 1) % productImages.length],
      subPicture1: productImages[(randomProductIndex + 2) % productImages.length],
      subPicture2: productImages[(randomProductIndex + 3) % productImages.length],
      subPicture3: productImages[(randomProductIndex + 4) % productImages.length],
      subPicture4: productImages[(randomProductIndex + 5) % productImages.length],
      subPicture5: productImages[(randomProductIndex + 6) % productImages.length],
      subPicture6: productImages[(randomProductIndex + 7) % productImages.length],
    },
    Rating: {
      rate: parseFloat((Math.random() * 5).toFixed(1)),
      userFeedBack: Math.floor(Math.random() * 10000),
      userFeedBackStart1: Math.floor(Math.random() * 100),
      userFeedBackStart2: Math.floor(Math.random() * 100),
      userFeedBackStart3: Math.floor(Math.random() * 100),
      userFeedBackStart4: Math.floor(Math.random() * 100),
      userFeedBackStart5: Math.floor(Math.random() * 100),
    },
    userfeedback: Math.floor(Math.random() * 1000),
    Availability: Math.random() < 0.5 ? 'In Stock' : 'Sold Out',
    brand: brand,
    color: {
      color1: ['Black', 'White', 'Silver', 'Gray'][Math.floor(Math.random() * 4)],
      color2: ['Blue', 'Red', 'Gold', 'Pink'][Math.floor(Math.random() * 4)],
    },
    size: {
      size1: ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)],
      size2: ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)],
    },
    storage: {
      storage1: ['64GB', '128GB', '256GB', '512GB'][Math.floor(Math.random() * 4)],
      storage2: ['64GB', '128GB', '256GB', '512GB'][Math.floor(Math.random() * 4)],
    },
    memory: {
      memory1: ['4GB', '8GB', '16GB', '32GB'][Math.floor(Math.random() * 4)],
      memory2: ['4GB', '8GB', '16GB', '32GB'][Math.floor(Math.random() * 4)],
    },
    isWishlist: Math.random() < 0.5,
    isAddToCard: Math.random() < 0.5,
    isAddToCompare: Math.random() < 0.5,
    category: category,
    isSale: Math.random() < 0.5,
    isBestDeals: Math.random() < 0.5,
    isHot: Math.random() < 0.5,
    quentityInTheCart: Math.floor(Math.random() * 10),
    isTop: Math.random() < 0.5,
    isSoldOut: Math.random() < 0.5,
  });
}


