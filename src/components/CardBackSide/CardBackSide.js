
import './CardBackSide.css'

const CardBackSide = (props) => {
  return (
    <div className='card-back-side-container'>
        {props.cardInfo.cvc === '' ? <p>000</p> : <p>{props.cardInfo.cvc}</p>}
    </div>
  )
}

export default CardBackSide