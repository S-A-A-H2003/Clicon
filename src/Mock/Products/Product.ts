
import img1 from './ImgProduct/Image.png'
import img2 from './ImgProduct/Image (1).png'
import img3 from './ImgProduct/Image1.jpg'


export const Products:Products[] = [];

interface Products {
  
    id: number,
    Sku: string,
    items: string,
    productNames: string,
    description: string,
    promotionalTalk:string,
    price:number,
    priceBefor: number,
    offer:number,
    Shipping: number,
    Tax: number,
    pictures: {
      mainPicture: string,
      subPicture1: string,
      subPicture2: string,
      subPicture3: string,
      subPicture4: string,
      subPicture5: string,
      subPicture6: string,
    },
    Rating:{
      rate: number,
      userFeedBack: number,
      userFeedBackStart1: number,
      userFeedBackStart2: number,
      userFeedBackStart3: number,
      userFeedBackStart4: number,
      userFeedBackStart5: number,
    },
    userfeedback: number,
    Availability: string,
    brand: string,  
    color: {
      color1: string,
      color2: string,
    },
    size: {
      size1: string,
      size2: string,
    },
    storage: {
      storage1: string,
      storage2: string,
    },
    memory: {
      memory1: string,
      memory2: string,
    },
    isWishlist: boolean,  
    isAddToCard: boolean,  
    isAddToCompare: boolean,
    category: string,
    isSale: boolean,
    isBestDeals: boolean,
    isHot: boolean,
    quentityInTheCart:number,
    isTop: boolean, 
    isSoldOut: boolean,
  
}
const productNames = [
  "Tecno",
  "Huawei",
  "Dell",
  "Apple",
  "Sony",
  "iPad",
  "Samsun",
  "Lenovo",
  "Microsoft",
  "Bose",
  "HP",
  "Xiaomi",
  "Huawei",
  "Asus",
  "Sony",
  "Xbox",
  "GoPro",
  "DJI",
  "Fitbit",
  "Garmin"
];

const productImages = [
  img1,
  img2,
  img3,

];
const items = [
  'Dell XPS', 'Apple MacBook', 'HP Spectre', 'Lenovo ThinkPad', 'Asus ROG ', 
  'Microsoft', 'Acer Predator', 'Logitech MX', 
  'Corsair K95', 'Razer Kraken ', 'Anker PowerCore', 
  'Western Digital', 'Logitech C920', 'Samsung Galaxy', 
  'Realme Narzo ', 'Xiaomi Mi ', 'Oppo Reno ', 'Vivo V Series', 'OnePlus Nord', 
  'Huawei P ', 'Infinix Zero ', 'Tecno Phantom ', ' WH-1000XM5', 
  'Bose QuietComfort 35', 'Apple AirPods Pro', 'Sennheiser Momentum', 'JBL Tune 750BTNC', 
  'Beats Studio3', 'Skullcandy Crusher', 'Anker PowerBank', 'Spigen Phone Case', 
  'Belkin Wireless Charger', 'PopSocket Grip', 'Aukey Car Charger', 'UGREEN USB-C Hub', 
  'Mophie Battery Case', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'PlayStation VR', 
  'Xbox Elite Wireless', 'Razer Wolverine', 'Canon EOS R5', 
  'Nikon Z7', 'Sony Alpha a7 ', 'GoPro Hero 9 ', 'DJI Mavic Air ', 
  'Fujifilm X-T4', 'Panasonic Lumix ', 'Apple Watch Series 7', 'Samsung Galaxy', 
  'Fitbit Charge 5', 'Garmin Forerunner', 'Casio G-Shock', 'Fossil Gen ', 
  'Seiko Prospex', 'Garmin DriveSmart', 'TomTom Go ', 'Magellan RoadMate', 
  'Garmin eTrex', 'Rand McNally ', 'Garmin GPSMAP ', 
  'Apple AirPods ', 'Bose Frames ', 'Fitbit Versa 3', 'Samsung Galaxy', 
  'Oculus Quest', 'Garmin Venu 2', 'Amazon Echo'
];


for (let i = 1; i <= 500; i++) {
  const randomProductIndex = Math.floor(Math.random() * productNames.length);
  const randomitems = Math.floor(Math.random() * items.length);


  // Generate a more descriptive SKU based on the product category and index
  const brand = ["Samsung", "Apple", "Dell", "Sony", "HP", "Lenovo", "Microsoft", "Asus", "GoPro", "DJI", "Fitbit", "Garmin"][Math.floor(Math.random() * 12)];
  const category = ['Computer & Laptop', 'Computer Accessories', 'SmartPhone', 'Headphone', 'Mobile Accessories','Gaming Console', 'Camera & Photo', 'TV & Homes Appliances', 'Watchs & Accessories', 'GPS & Navigation', 'Warable Technology'][Math.floor(Math.random() * 11)];
  const sku = `${brand.slice(0, 3).toUpperCase()}-${category.slice(0, 3).toUpperCase()}-${i}`;
  Products.push({
    id: i,
    Sku: sku,  // The SKU is now based on the brand, category, and index
    items: items[randomitems],
    productNames: productNames[randomProductIndex],
    description: `This is the ${productNames[randomProductIndex]}, a high-performance device for all your needs.`,
    promotionalTalk:`This is the ${productNames[randomProductIndex]}, a high-performance device for all your needs.`,
    price: Math.floor(Math.random() * 1000) + 100, // Random price between 100 and 1000
    priceBefor: Math.floor(Math.random() * 1000) + 100, // Random price before discount
    offer: Math.random() < 0.5 ? Math.floor(Math.random() * 50) + 1 : 0, // Random offer
    Shipping: Math.floor(Math.random() * 5) + 10,
    Tax: Math.floor(Math.random() * 1) + 10,
    pictures: {
      mainPicture: productImages[(randomProductIndex + 1) % productImages.length], // Assign real image
      subPicture1: productImages[(randomProductIndex + 2) % productImages.length],
      subPicture2: productImages[(randomProductIndex + 3) % productImages.length],
      subPicture3: productImages[(randomProductIndex + 4) % productImages.length],
      subPicture4: productImages[(randomProductIndex + 5) % productImages.length],
      subPicture5: productImages[(randomProductIndex + 6) % productImages.length],
      subPicture6: productImages[(randomProductIndex + 7) % productImages.length],
    },
    Rating: {
      rate: (Math.random() * 5).toFixed(1), // Random rating between 0.0 and 5.0
      userFeedBack: Math.floor(Math.random() * 10000),
      userFeedBackStart1: Math.floor(Math.random() * 100),
      userFeedBackStart2: Math.floor(Math.random() * 100),
      userFeedBackStart3: Math.floor(Math.random() * 100),
      userFeedBackStart4: Math.floor(Math.random() * 100),
      userFeedBackStart5: Math.floor(Math.random() * 100),
    },
    userfeedback: Math.floor(Math.random() * 1000),
    Availability: Math.random() < 0.5 ? 'In Stock' : 'Sold Out',
    brand: brand,  // Added brand name
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
    isWishlist: Math.random() < 0.5,  // Boolean value for wishlist
    isAddToCard: Math.random() < 0.5,  // Boolean value for add to cart
    isAddToCompare: Math.random() < 0.5,  // Boolean value for add to compare
    category: category,  // Added category name
    isSale: Math.random() < 0.5,  // Boolean value for sale status
    isBestDeals: Math.random() < 0.5,  // Boolean value for best deals
    isHot: Math.random() < 0.5,  // Boolean value for hot products
    quentityInTheCart: Math.floor(Math.random() * 10),  // Quantity in the cart
    isTop: Math.random() < 0.5,  // Boolean value for top product
    isSoldOut: Math.random() < 0.5,  // Boolean value for top product
  });
}

