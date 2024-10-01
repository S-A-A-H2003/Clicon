import { lazy } from 'react';
//Constant
import { PATH } from '../Constant/Route';

//Page
 const Home = lazy(()=>import('../Pages/Home'));
 const Shop = lazy(()=>import('../Pages/Shop'));
 const ProductDetail  = lazy(()=>import('../Pages/ProductDetail'));
 const TrackOrder = lazy(()=>import(  '../Pages/TrackOrder'));
 const AboutUs = lazy(()=>import(  '../Pages/AboutUs'));
 const BlogDetail   = lazy(()=>import('../Pages/BlogDetail'));
 const BlogList = lazy(()=>import(  '../Pages/BlogList'));
 const Cart = lazy(()=>import(  '../Pages/Cart'));
 const CheckOut = lazy(()=>import(  '../Pages/CheckOut'));
 const CheckOutSuccess = lazy(()=>import(  '../Pages/CheckOutSuccess'));
 const Compare = lazy(()=>import(  '../Pages/Compare'));
 const CustomerSupport = lazy(()=>import(  '../Pages/CustomerSupport'));
 const Dashbord   = lazy(()=>import('../Pages/Dashbord'));
 const DashbordBrowsingHistory   = lazy(()=>import('../Pages/DashbordBrowsingHistory'));
 const DashbordCardsAddress  = lazy(()=>import( '../Pages/DashbordCards&Address'));
 const DashbordOrderHistory  = lazy(()=>import( '../Pages/DashbordOrderHistory'));
 const DashbordSetting  = lazy(()=>import( '../Pages/DashbordSetting'));
 const EmailVerification = lazy(()=>import(  '../Pages/EmailVerification'));
 const Error404 = lazy(()=>import(  '../Pages/Error404'));
 const FAQs = lazy(()=>import(  '../Pages/FAQs'));
 const ForgetPassword = lazy(()=>import(  '../Pages/ForgetPassword'));
 const ResetPassword = lazy(()=>import(  '../Pages/ResetPassword'));
 const SignIn = lazy(()=>import(  '../Pages/SignIn'));
 const SignUp = lazy(()=>import(  '../Pages/SignUp'));
 const Wishlist = lazy(()=>import(  '../Pages/Wishlist'));
 const TrackOrderDetails = lazy(()=>import(  '../Pages/TrackOrderDetails'));

 interface Router {
   index?: boolean; 
   path?: string; 
   element: JSX.Element;
 }

export const Routers:Router[]=[
   { index: true, element: <Home /> },
   { path: PATH.SHOP, element: <Shop /> },
   { path: PATH.PRODUCTDETAIL, element: <ProductDetail /> },
   { path: PATH.TRACKORDER, element: <TrackOrder /> },
   { path: PATH.ABOUTUS, element: <AboutUs /> },
   { path: PATH.BLOGDETAIL, element: <BlogDetail /> },
   { path: PATH.BLOGLIST, element: <BlogList /> },
   { path: PATH.CART, element: <Cart /> },
   { path: PATH.CHECKOUT, element: <CheckOut /> },
   { path: PATH.CHECKOUTSUCCESS, element: <CheckOutSuccess /> },
   { path: PATH.COMPARE, element: <Compare /> },
   { path: PATH.CUSTOMERSUPPORT, element: <CustomerSupport /> },
   { path: PATH.DASHBORD, element: <Dashbord /> },
   { path: PATH.DASHBORDBROWSINGHISTORY, element: <DashbordBrowsingHistory /> },
   { path: PATH.DASHBORDCARDSADDRESS, element: <DashbordCardsAddress /> },
   { path: PATH.DASHBORDORDERHISTORY, element: <DashbordOrderHistory /> },
   { path: PATH.DASHBORDSETTING, element: <DashbordSetting /> },
   { path: PATH.EMAILVERIFICATION, element: <EmailVerification /> },
   { path: PATH.ERROR404, element: <Error404 /> },
   { path: PATH.FAQS, element: <FAQs /> },
   { path: PATH.FORGETPASSWORD, element: <ForgetPassword /> },
   { path: PATH.RESETPASSWORD, element: <ResetPassword /> },
   { path: PATH.SIGNIN, element: <SignIn /> },
   { path: PATH.SIGNUP, element: <SignUp /> },
   { path: PATH.WISHLIST, element: <Wishlist /> },
   { path: PATH.TRACKORDERDETAILS, element: <TrackOrderDetails /> },
  ]
