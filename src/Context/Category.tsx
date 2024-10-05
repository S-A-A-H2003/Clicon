import { useContext } from "react";
import { createContext } from "react";
import { useGet } from "../Hook/Api/Get";
import { useTranslation } from "react-i18next";

export const CategoryContext  = createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CategoryProvider =({ children }: Props)=>{
    const {i18n}=useTranslation()
    const Api = i18n.language==='ar'?import.meta.env.VITE_API_GET_CATEGORY_AR:import.meta.env.VITE_API_GET_CATEGORY
    const {data:Category}=useGet(Api)
    return <CategoryContext.Provider value={{Category}}>
        {children}
    </CategoryContext.Provider>
}
export default CategoryProvider

export const useCategoryContext =()=>{
    return useContext(CategoryContext)
}