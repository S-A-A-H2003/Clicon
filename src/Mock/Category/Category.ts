import img1 from './ImgCategory/Image.png';
import img2 from './ImgCategory/Image (1).png';
import img3 from './ImgCategory/Image1.jpg';
import img4 from './ImgCategory/d.jpg';
import img5 from './ImgCategory/d.jpg';
import img6 from './ImgCategory/ff.jpg';
import img7 from './ImgCategory/istockphoto-1693769417-612x612.webp';
import img8 from './ImgCategory/istockphoto-1693769417-612x612.webp';
import img9 from './ImgCategory/photo-1496181133206-80ce9b88a853.avif';
import img10 from './ImgCategory/photo-1499612657035-beb4431a3cdb.avif';
import img11 from './ImgCategory/photo-1522199755839-a2bacb67c546.avif';

interface category {
  id:number;
  name:string;
  isTopCategory:boolean;
  Picture:string;
}
  
export const category:category[] =

[
  {id:1,name:'Computer & Laptop',isTopCategory:false ,Picture:img1},
  {id:2,name:'Computer Accessories',isTopCategory:false,Picture:img2 },
  {id:3,name:'SmartPhone',isTopCategory:false,Picture:img3 },
  {id:4,name:'Headphone',isTopCategory:false ,Picture:img4},
  {id:5,name:'Mobile Accessories',isTopCategory:false,Picture:img5 },
  {id:6,name:'Gaming Console',isTopCategory:false,Picture:img6 },
  {id:7,name:'Camera & Photo',isTopCategory:false,Picture:img7 },
  {id:8,name:'TV & Homes Appliances',isTopCategory:false,Picture:img8 },
  {id:9,name:'Watchs & Accessories',isTopCategory:false,Picture:img9 },
  {id:10,name:'GPS & Navigation',isTopCategory:false,Picture:img10 },
  {id:11,name:'Warable Technology',isTopCategory:false,Picture:img11 }, 
];