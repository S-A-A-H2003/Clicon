import axios from "axios"
import { useEffect, useState } from "react"

export const usePost =(Url:any,Body:any)=>{

const [isloding,setIsLoding] = useState<boolean>()
const [response,setResponse] = useState<any>()
const [massege,setMassege] = useState<string>()

useEffect(()=>{
(async ()=>{
    try{
        setIsLoding(true)
        const res = await axios.post(Url,Body)
        setResponse(res)
        setMassege('Succeeded')
    }catch(error){
        setMassege('Not Succeeded! Try Agien')
    }
}
)()},[Url,Body])    

return {response,isloding,massege}
}