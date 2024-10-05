
import img1 from './ImgCategory/Image (2).png'


interface category {
  id:number;
  name:string;
  isTopCategory:boolean;
  Picture:string;
}
  
export const category:category[] =

[
  {id:1,name:'Computer & Laptop',isTopCategory:false ,Picture:img1},
  {id:2,name:'Computer Accessories',isTopCategory:false,Picture:img1 },
  {id:3,name:'SmartPhone',isTopCategory:false,Picture:img1 },
  {id:4,name:'Headphone',isTopCategory:false ,Picture:img1},
  {id:5,name:'Mobile Accessories',isTopCategory:false,Picture:img1 },
  {id:6,name:'Gaming Console',isTopCategory:false,Picture:img1 },
  {id:7,name:'Camera & Photo',isTopCategory:false,Picture:img1 },
  {id:8,name:'TV & Homes Appliances',isTopCategory:false,Picture:img1 },
  {id:9,name:'Watchs & Accessories',isTopCategory:false,Picture:img1 },
  {id:10,name:'GPS & Navigation',isTopCategory:false,Picture:img1 },
  {id:11,name:'Warable Technology',isTopCategory:false,Picture:img1 }, 
];