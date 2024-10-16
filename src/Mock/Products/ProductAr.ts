
import img1 from './ImgProduct/Image.png'
import img2 from './ImgProduct/Image.png'
import img3 from './ImgProduct/Image.png'
import img4 from './ImgProduct/Image.png'
import img5 from './ImgProduct/Image.png'
import img6 from './ImgProduct/Image.png'
import img7 from './ImgProduct/Image.png'
import img8 from './ImgProduct/Image.png'
import img9 from './ImgProduct/Image.png'
import img10 from './ImgProduct/Image.png'
import img11 from './ImgProduct/Image.png'
import img12 from './ImgProduct/Image.png'
import img13 from './ImgProduct/Image.png'
import img14 from './ImgProduct/Image.png'
import img15 from './ImgProduct/Image.png'

export const ProductAr:Products[] = [];

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
      rate: any,
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
  "تكنو",
  "هواوي",
  "دل",
  "ابل",
  "سوني",
  "اي باد برو",
  "سامسونج",
  "لينوفو",
  "ميكروسوفت",
  "بوس",
  "اتش بي",
  "اكس يومي",
  "هواوي",
  "اسوس",
  "سوني",
  "اكس بوكس",
  "قو برو",
  "دي جي تي",
  "فب بت",
  "قرامنج"
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

];
const items = [
    'ديل ', 'ابل ماك بوك', 'اتش بي سبكتري', 'لينوفو ثينك باد', 'اسوس ', 
    'مايكروسوفت', 'ايسر بريديتور', 'لوجيتك ', 
    'كورسير ', 'ريزر كراكن', 'انكر باور كور', 
    'ويسترن ديجيتال', 'لوجيتك ', 'سامسونج جالكسي', 
    'ريلمي نارزو', 'شاومي مي', 'اوبو رينو', 'فيفو V سيريز', 'ون بلس نورد', 
    'هواوي P', 'انفينيكس زيرو', 'تكنو فانتوم', 
    'بوز كوايت كومفورت 35', 'ابل ايربودز برو', 'سنهيسر مومنتوم', 'جي بي ال تيون ', 
    'بيتس ستوديو3', 'سكالكندي كراشر', 'انكر باور بانك', 'غطاء هاتف ', 
    'شاحن لاسلكي ', 'مقبض ', 'شاحن سيارة ', 'محول ', 
    'غطاء بطارية ', 'بلايستيشن 5', 'اكس بوكس سيريز ', 'نينتندو سويتش', 'بلايستيشن ', 
    'اكس بوكس ايليت لاسلكي', 'ريزر ولفيرين', 'كانون ', 
    'نيكون Z7', 'سوني ألفا a7', 'جو برو هيرو 9', 'دي جي اي مافيك اير', 
    'فوجي فيلم X-T4', 'باناسونيك لوميكس', 'ابل واتش سيريز 7', 'سامسونج جالكسي', 
    'فيتبيت تشارج 5', 'جارمن فوررنر', 'كاسيو ', 'فوسيل ', 
    'سيكو بروسبكس', 'جارمن درايف سمارت', 'توم توم جو', 'ماجلان رود ميت', 
    'جارمن ', 'راند مكينالي', 'جارمن ', 
    'ابل ايربودز', 'بوز فريمز', 'فيتبيت فيرسا 3', 'سامسونج جالكسي', 
    'اوكيولوس كويست', 'جارمن فينو 2', 'امازون ايكو'
];


for (let i = 1; i <= 500; i++) {
  const randomProductIndex = Math.floor(Math.random() * productNames.length);
  const randomitems = Math.floor(Math.random() * items.length);


  // Generate a more descriptive SKU based on the product category and index
  const brand = ["سامسونج", "ابل", "دل", "سوني", "اتش بي", "لينوفو", "ميكروسفت", "اسوس", "قوبرو", "دي جي اي", "فت بت", "جرامن"][Math.floor(Math.random() * 12)];
  const category = ['كمبيوتر و لابتوب', 'ملحقات الكمبيوتر', 'هاتف ذكي', 'سماعة', 'ملحقات الهاتف', 'جهاز ألعاب', 'كاميرا وصور', 'تلفاز وأجهزة منزلية', 'ساعات وإكسسوارات', 'نظام تحديد المواقع والملاحة', 'التقنية القابلة للارتداء'][Math.floor(Math.random() * 11)];
  const sku = `${brand.slice(0, 3).toUpperCase()}-${category.slice(0, 3).toUpperCase()}-${i}`;
  ProductAr.push({
    id: i,
    Sku: sku,  // The SKU is now based on the brand, category, and index
    items: items[randomitems],
    productNames: productNames[randomProductIndex],
    description: `هذا هو ال ${productNames[randomProductIndex]}, الجهاز عالي الاداء لجميع الاحتياجات.`,
    promotionalTalk:`هذا هو ال ${productNames[randomProductIndex]}, لجهاز عالي الاداء لجميع الاحتياجات.`,
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

