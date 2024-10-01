import { useContext } from "react";
import { createContext } from "react";
import { useGet } from "../Hook/Api/Get";

export const CategoryContext  = createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CategoryProvider =({ children }: Props)=>{
    const {data:Category}=useGet(import.meta.env.VITE_API_GET_CATEGORY)

    return <CategoryContext.Provider value={{Category}}>
        {children}
    </CategoryContext.Provider>
}
export default CategoryProvider

export const useCategoryContext =()=>{
    return useContext(CategoryContext)
}