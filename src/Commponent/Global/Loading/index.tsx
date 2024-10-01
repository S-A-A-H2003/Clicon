import './style.scss'

//Component
import Container from '../Container'

export default function Loading() {
 
  return (
    <>
      <Container className='Loading'>
        <div className="loader"></div>
      </Container>
    </>
  )
}
