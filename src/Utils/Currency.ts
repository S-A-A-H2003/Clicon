import { useEffect, useState } from "react"
import { useGet } from "../Hook/Api/Get"



export const convertCurrency = (amount:number,currencyType:string):string|number|undefined=>{
    const [value,setValue]=useState<number>()
    const apiUrl =import.meta.env.VITE_API_GET_CURRENCY
    const {data} = useGet(apiUrl)
    useEffect(()=>{
        if (currencyType ==='USD'){
            setValue(amount)
        }else{
            const filteredCurrency = data?.filter((item:any)=>item.Currency===currencyType)
            filteredCurrency?.map((item:any)=>{setValue((item.Price * amount))})   
        }
    },[data,amount,convertCurrency])
       
    return value?.toFixed(0)
}