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



interface categoryAr {
  id:number;
  name:string;
  isTopCategory:boolean;
  Picture:string;
}
  
export const categoryAr:categoryAr[] =

[
  {id:1,name:'كمبيوتر و لابتوب',isTopCategory:false,Picture:img1 }, 
  {id:2,name:'ملحقات كمبيوتر',isTopCategory:false,Picture:img2 },
  {id:3,name:'هاتف ذكي',isTopCategory:false ,Picture:img3},
  {id:4,name:'سماعة',isTopCategory:false ,Picture:img4},
  {id:5,name:'الهاتف ملحقات',isTopCategory:false ,Picture:img5},
  {id:6,name:'ألعاب جهاز',isTopCategory:false,Picture:img6 },
  {id:7,name:'وصور كاميرا',isTopCategory:false ,Picture:img7},
  {id:8,name:' تلفاز وأجهزة الملاحة' ,isTopCategory:false,Picture:img8 },
  {id:9,name:'ساعات وإكسسوارات',isTopCategory:false,Picture:img9 },
  {id:10,name:' نظام تحديد المواقع والملاحة',isTopCategory:false,Picture:img10 },
  {id:11,name:'التقنية القابلة للارتداء',isTopCategory:false,Picture:img11 }, 
];