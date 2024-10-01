import './style.scss'

//Librari
import i18n from '../../../../Utils/i18NextLang';
import { useTranslation } from 'react-i18next';

interface Props {
  className:string;
}

export default function ButtonLanguage({className}:Props) {
 const {t}=useTranslation()
 const HandelChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
     localStorage.setItem('Language',e.target.value)
     i18n.changeLanguage(i18n.language==='en'?'ar':'en')
 }

  return (
    <>
     <select className={className +' ButtonLanguage'} onChange={(e)=>HandelChange(e)} title='Language' value={localStorage.getItem('Language')||'ENG'}>
        <option value='en'>{t('ENG')}</option>
        <option value='ar'>{t('AR')}</option>
     </select>
    </>
  )
}
