import { createContext, useContext, useState } from "react";
export const ResultSearchSopeContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const ResultSearchProvider =({ children }: Props)=>{
    const [resultSearchSope, setResultSearchSope] = useState<[]>();
    return <ResultSearchSopeContext.Provider value={{resultSearchSope, setResultSearchSope}}>
        {children}
    </ResultSearchSopeContext.Provider>
}
export default ResultSearchProvider;

export const useResultSearchSopeContext =()=>{
    return useContext(ResultSearchSopeContext)
}