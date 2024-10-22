import './style.scss'

//Asset
import SearchIcon from '../../../Asset/Image/Component/Search/Search.png'

//Context
import { useProductsContext } from '../../../Context/Products'
import { useResultSearchContext } from '../../../Context/ResultSearch'

//Librari
import { useTranslation } from 'react-i18next'
import { useResultSearchSopeContext } from '../../../Context/ResultSearchSope'
import { useState } from 'react'
// import { BodySmall400 } from '../../../Style/Font/Typograpy'
// import { Color } from '../../../Constant/Colors'

interface Props {
  sope?:boolean;
}

export default function Search({sope}:Props) {
  const {Products} = useProductsContext()
  const {t}=useTranslation()
  const {setResultSearch}=useResultSearchContext()
  const {setResultSearchSope}=useResultSearchSopeContext()
  const [value,setValue ]=useState<[]>([])
  // const [keyWord,setKeyWord ]=useState<[]>([])


  const HandelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (value.length>0) {
      sope?setResultSearchSope(value):setResultSearch(value)
    }else{
      sope?setResultSearchSope('Not Found Result...'):setResultSearch('Not Found Result...')
    }
  }
  
  const HandelChandeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(Products?.filter((item:any)=>item.productNames.toLowerCase().includes(e.target.value.toLowerCase().trim())))
   //setKeyWord(Products?.filter((item:any)=>item.productNames.toLowerCase().includes(e.target.value.toLowerCase().trim())))
  }

  return (
    <>
    <div className='Search'>
        <form className='Search_Form' onSubmit={(e)=>HandelSubmit(e)}>
          <input className='Search_Input' type='search'  placeholder={t('Search for anything...')} onChange={(e)=>HandelChandeInput(e)}/>
          <button className='Search_Submit' type='submit'><img src={SearchIcon} alt='Search' /></button>
        </form>
        {/* {value.length>0?
          <div className='Search_KeyWord'>
            {Array.isArray(keyWord) && keyWord?.map((item:any)=>
            <BodySmall400 
              color={Color.Gary600}
            >
              {item.productNames}
            </BodySmall400>)}
          </div>
        :''} */}
      </div>
    </>
  )
}
