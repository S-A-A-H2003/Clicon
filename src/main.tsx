import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

//Mock
import { worker } from './Mock/Api/Browser';

//Librari
import { BrowserRouter } from 'react-router-dom';

//Context
import ProductsProvider from './Context/Products';
import CartProvider from './Context/Cart';
import WishlistProvider from './Context/Wishlist';
import CountCartProvider from './Context/CountCart';
import CountWishlistProvider from './Context/CountWishlist';
import ResultProvider from './Context/ResultSearch';
import CategoryProvider from './Context/Category';
import CardTotalsProvider from './Context/CardTotals';

//Start MSW
await worker.start()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <CountCartProvider>
              <CountWishlistProvider>
                <CategoryProvider>
                  <CardTotalsProvider>
                    <ResultProvider>
                      <App/>
                    </ResultProvider>
                  </CardTotalsProvider>
                </CategoryProvider>
              </CountWishlistProvider>
            </CountCartProvider>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>,
)
