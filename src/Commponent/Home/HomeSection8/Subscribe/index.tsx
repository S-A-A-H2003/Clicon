import './style.scss'
import { useState } from 'react'

//Component
import Container from '../../../Global/Container'
import ButtonGlobal from '../../../Global/Button/ButtonGlobal'


//Style
import { H5 } from '../../../../Style/Font/Typograpy'


//Asset
import ArrowRight from '../../Asset/Image/Global/Button/ArrowRight.png'

//Hook
import { usePost } from '../../../../Hook/Api/Post'


export default function Subscribe() {

  const [email,setEmail]=useState('')
  const [body,setBody]=useState<any>('')
  const {isloding,massege}=usePost('https://Clicon.com/Subscribe',body)
  
  const HandelSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const body = {
      email:email,
    }
    setBody(body)
    window.alert(massege)
    
  }

  const HandelChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
   setEmail(e.target.value) 
  }
  return (
    <>
      <Container className='Subscribe' width={624} height={72}>
        <form className='Subscribe_Form' onSubmit={HandelSubmit}>

          <input type='email' className='Subscribe_Form_Input_1' placeholder='Email address'  id='Email'  onChange={HandelChangeInput} value={email}></input>
          <ButtonGlobal
          className={'Subscribe_Form_Button'}
          width={160}
          type={'submit'}
          >
          <H5>SUBSCRIBE {isloding?'O':<img src={ArrowRight} alt=''></img>}</H5>
          </ButtonGlobal>
        </form>
      </Container>
    </>
  )
}
