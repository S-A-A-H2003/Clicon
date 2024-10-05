import { http,HttpResponse } from "msw";
import { Products } from "../Products/Product";
import { ProductAr } from "../Products/ProductAr";
import { category } from "../Category/Category";
import { categoryAr } from "../Category/CategoryAr";

export const handlers = [
    http.get('https://Clicon.com/Products', () => {
      return HttpResponse.json(
        Products
      )
    }),
    http.get('https://Clicon.com/Products/ar', () => {
      return HttpResponse.json(
        ProductAr
      )
    }),
    http.get('https://Clicon.com/category', () => {
      return HttpResponse.json(category)
    }),
    http.get('https://Clicon.com/category/ar', () => {
      return HttpResponse.json(categoryAr)
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
    http.post('https://Clicon.com/CardCouponCode', () => {
      return HttpResponse.json(
        [
          {message:'Succeeded',Coupon:55}
            
        ])
    }),
    http.get('https://Clicon.com/Currency', () => {
      return HttpResponse.json(
        [
          {Currency:'LS',Price:3.6}  
        ])
    }),
  ]


