import { createContext, useContext, useState } from "react";
export const ResultSearchContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const ResultSearchProvider =({ children }: Props)=>{
    const [resultSearch, setResultSearch] = useState<[]>();
    return <ResultSearchContext.Provider value={{resultSearch, setResultSearch}}>
        {children}
    </ResultSearchContext.Provider>
}
export default ResultSearchProvider;

export const useResultSearchContext =()=>{
    return useContext(ResultSearchContext)
}