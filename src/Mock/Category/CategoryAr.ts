import img1 from './ImgCategory/Image (2).png'


interface categoryAr {
  id:number;
  name:string;
  isTopCategory:boolean;
  Picture:string;
}
  
export const categoryAr:categoryAr[] =

[
  {id:1,name:'كمبيوتر و لابتوب',isTopCategory:false,Picture:img1 }, 
  {id:2,name:'ملحقات كمبيوتر',isTopCategory:false,Picture:img1 },
  {id:3,name:'هاتف ذكي',isTopCategory:false ,Picture:img1},
  {id:4,name:'سماعة',isTopCategory:false ,Picture:img1},
  {id:5,name:'الهاتف ملحقات',isTopCategory:false ,Picture:img1},
  {id:6,name:'ألعاب جهاز',isTopCategory:false,Picture:img1 },
  {id:7,name:'وصور كاميرا',isTopCategory:false ,Picture:img1},
  {id:8,name:' تلفاز وأجهزة الملاحة' ,isTopCategory:false,Picture:img1 },
  {id:9,name:'ساعات وإكسسوارات',isTopCategory:false,Picture:img1 },
  {id:10,name:' نظام تحديد المواقع والملاحة',isTopCategory:false,Picture:img1 },
  {id:11,name:'التقنية القابلة للارتداء',isTopCategory:false,Picture:img1 }, 
];