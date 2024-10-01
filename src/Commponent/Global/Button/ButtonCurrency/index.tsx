import './style.scss'

import { useTranslation } from 'react-i18next';
import { useState } from 'react'

interface Props{
  className:String;
}

export default function ButtonCurrency({className}:Props) {
 const {t}=useTranslation()
 const [valueCurrency, setValueCurrency] = useState<string | null>(localStorage.getItem('Currency'));
const HandelChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
  localStorage.setItem('Currency',e.target.value)
  setValueCurrency(localStorage.getItem('Currency'))
}
  return (
    <>
     <select className={className +' ButtonCurrency'} onChange={(e)=>HandelChange(e)} title='Currency' value={valueCurrency || 'USD'}>
        <option value='USD'>{t('USD')}</option>
        <option value='LS'>{t('LS')}</option>
     </select>
    </>
  )
}
