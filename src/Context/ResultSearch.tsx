import { createContext, useContext, useState } from "react";
export const ResultContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const ResultProvider =({ children }: Props)=>{
    const [resultSearch, setResultSearch] = useState<[]>();
    return <ResultContext.Provider value={{resultSearch, setResultSearch}}>
        {children}
    </ResultContext.Provider>
}
export default ResultProvider;

export const useResultContext =()=>{
    return useContext(ResultContext)
}