import { createContext, useContext } from "react";
import { useGet } from "../Hook/Api/Get";

export const ProductsContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const ProductsProvider =({ children }: Props)=>{
    const {data:Products}=useGet('https://Clicon.com/Products')
    return<ProductsContext.Provider  value={{Products}}>
       {children}
    </ProductsContext.Provider>
}
export default ProductsProvider;

export const useProductsContext=()=>{
    return useContext(ProductsContext)
}