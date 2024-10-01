import axios from "axios"
import { useEffect, useState } from "react"

export const useGet =(Url:any)=>{

const [isloding,setIsLoding] = useState<boolean>()
const [data,setData] = useState<any>()
const [massege,setMassege] = useState<any>()

useEffect(()=>{
(async ()=>{
    try{
        setIsLoding(true)
        const response = await axios.get(Url)
        setData(response.data)
    }catch(error){
        setMassege(error)
    }
}
)()},[Url])    

return {data,isloding,massege}
}
