import { http,HttpResponse } from "msw";
import { Products } from "../Products/Product";

export const handlers = [
    http.get('https://Clicon.com/Products', () => {
      return HttpResponse.json(
        Products
      )
    }),
    http.get('https://acme.com/category', () => {
      return HttpResponse.json(
        [
          {id:1,name:'Computer & Laptop',isTopCategory:false },
          {id:2,name:'Computer Accessories',isTopCategory:false },
          {id:3,name:'SmartPhone',isTopCategory:false },
          {id:4,name:'Headphone',isTopCategory:false },
          {id:5,name:'Mobile Accessories',isTopCategory:false },
          {id:6,name:'Gaming Console',isTopCategory:false },
          {id:7,name:'Camera & Photo',isTopCategory:false },
          {id:8,name:'TV & Homes Appliances',isTopCategory:false },
          {id:9,name:'Watchs & Accessories',isTopCategory:false },
          {id:10,name:'GPS & Navigation',isTopCategory:false },
          {id:11,name:'Warable Technology',isTopCategory:false }, 
        ])
    }),
    http.post('https://Clicon.com/Subscribe', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded'}
            
        ])
    }),
    http.post('https://Clicon.com/Cart', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded'}
            
        ])
    }),
    http.post('https://Clicon.com/Wishlist', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded'}
            
        ])
    }),
    http.post('https://Clicon.com/Cart', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded'}
            
        ])
    }),
    http.post('https://Clicon.com/CardCouponCode', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded',Coupon:55}
            
        ])
    }),
    http.post('https://Clicon.com/wishlist', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded'}
            
        ])
    }),
  ]