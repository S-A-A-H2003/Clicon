import './style.scss'

//Asset
import SearchIcon from '../../../Asset/Image/Component/Search/Search.png'

//Context
import { useProductsContext } from '../../../Context/Products'
import { useResultContext } from '../../../Context/ResultSearch'

//Librari
import { useTranslation } from 'react-i18next'

export default function Search() {
  const {Products} = useProductsContext()
  const {t}=useTranslation()
  const {setResultSearch}=useResultContext()
  const HandelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  
  const HandelChandeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const Result = Products?.filter((item:any)=>item.productNames.toLowerCase().includes(e.target.value.toLowerCase().trim()))
    if (Result.length>0) {
      setResultSearch(Result)
    }else{
      setResultSearch('Not Found Result...')
    }
  }
  return (
    <>
      <form className='Search' onSubmit={(e)=>HandelSubmit(e)}>
        <input className='Search_Input' type='search'  placeholder={t('Search for anything...')} onChange={(e)=>HandelChandeInput(e)}/>
        <button className='Search_Submit' type='submit'><img src={SearchIcon} alt='Search' /></button>
      </form>
    </>
  )
}
