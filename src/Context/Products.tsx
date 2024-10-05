import { createContext, useContext } from "react";
import { useGet } from "../Hook/Api/Get";
import { useTranslation } from "react-i18next";

export const ProductsContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const ProductsProvider =({ children }: Props)=>{
    const {i18n}=useTranslation()
    const Api = i18n.language==='ar'?import.meta.env.VITE_API_GET_PRODUCTS_AR:import.meta.env.VITE_API_GET_PRODUCTS
    const {data:Products}=useGet(Api)
    return<ProductsContext.Provider  value={{Products}}>
       {children}
    </ProductsContext.Provider>
}
export default ProductsProvider;

export const useProductsContext=()=>{
    return useContext(ProductsContext)
}