import './CardFrontSide.css'
import cardLogo from '../../assets/images/card-logo.svg'

const CardFrontSide = (props) => {
    console.log(props.cardInfo.cardNumber)
    return (
        <div className='card-front-side-container'>
            <div className='card-front-side'>
                <div className='card-logo'>
                    <img src={cardLogo} alt="" />
                </div>
                <div className='card-number'>
                    {props.cardInfo.cardNumber === '' ? <p>0000 0000 0000 0000</p> : <p>{props.cardInfo.cardNumber}</p>}
                </div>
                <div className='card-info'>
                    {props.cardInfo.name === '' ? <p>Anna Guimarães</p> : <p>{props.cardInfo.name}</p>}
                    {props.cardInfo.month === '' && props.cardInfo.year === '' ? <p>00/00</p> : <p>{props.cardInfo.month}/{props.cardInfo.year}</p>}
                </div>
            </div>
        </div>
    )
}

export default CardFrontSide