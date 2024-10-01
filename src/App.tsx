import './App.scss'

//React
import { Suspense } from 'react';

//Librari
import { useRoutes } from 'react-router-dom';

//Router
import { Routers } from './Router/Router';

//Component
import Loading from './Commponent/Global/Loading';
import Header from './Commponent/Headers/Header';
import ResultSearch from './Commponent/Headers/ResultSearch';

//Context
import { useResultContext } from './Context/ResultSearch';

//Style
import { GlobalStyle } from './Style/GlobalStyle/Style';

//Librari
import { useTranslation } from 'react-i18next';
import { usePost } from './Hook/Api/Post';
import { useCartContext } from './Context/Cart';

function App() {
  const {i18n}=useTranslation()
  const Router = useRoutes(Routers)
  const {resultSearch}=useResultContext()
  
  //Global Post
  const {cart}=useCartContext()
  const {wishlist}=useCartContext()
  usePost('https://Clicon.com/Cart',cart)
  usePost('https://Clicon.com/Wishlist',wishlist)
  ////////////////////////////////////////////////////////
  return (
    <>
      <GlobalStyle dir={i18n.language==='ar'?'rtl':'ltr'}></GlobalStyle>
      <Header></Header>
      {resultSearch?<div className="ResultSearch_Home"><ResultSearch></ResultSearch></div>:
        <Suspense fallback={<Loading/>}>
          {Router}
        </Suspense>
      }    
    </>
  );
}

export default App;

