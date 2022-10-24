import { useState, useEffect } from 'react'
import './Form.css'

const Form = (props) => {
    // inputs
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')
    // errors
    const [error, setError] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
        const newCardInfo = {
            name: e.target.value,
            cardNumber,
            month,
            year,
            cvc
        }
        props.onSetCardInfo(newCardInfo)
    }

    const handleCardNumberChange = (e) => {
        if(e.target.value.length > 19) return
        setCardNumber(e.target.value)
        
        const newCardInfo = {
            name,
            cardNumber: e.target.value,
            month,
            year,
            cvc
        }
        props.onSetCardInfo(newCardInfo)
    }

    const handleMonthChange = (e) => {
        if(e.target.value.length > 2) return 
        
        setMonth(e.target.value)

        const newCardInfo = {
            name,
            cardNumber,
            month: e.target.value,
            year,
            cvc
        }
        props.onSetCardInfo(newCardInfo)
    }

    const handleYearChange = (e) => {
        if(e.target.value.length > 2) return 

        setYear(e.target.value)
        const newCardInfo = {
            name,
            cardNumber,
            month,
            year: e.target.value,
            cvc
        }
        props.onSetCardInfo(newCardInfo)
    }

    const handleCvcChange = (e) => {
        if(e.target.value.length > 3) return

        setCvc(e.target.value)
        const newCardInfo = {
            name,
            cardNumber,
            month,
            year,
            cvc: e.target.value,
        }
        props.onSetCardInfo(newCardInfo)
    }

    function cc_format(value) {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 16);

        const parts = [];

        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }
        
        return parts.length > 1 ? parts.join(" ") : value;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            return setError('Nome é um campo obrigatório!')
        }
        if (!cardNumber) {
            return setError('Número do cartão é um campo obrigatório!')
        }
        if (!month || !year) {
            return setError('Data de validade é um campo obrigatório!')
        }
        if(month > 12 || month === '00'){
            return setError('Mês inválido!')
        }
        if(year === '00'){
            return setError('Ano inválido!')
        }
        if (!cvc) {
            return setError('CVC é um campo obrigatório!')
        }

        setName('')
        setCardNumber('')
        setMonth('')
        setYear('')
        setCvc('')

        const resetCardInfo = {
            name: 'Ana Guimarães',
            cardNumber: '0000 0000 0000 0000',
            month: '00',
            year: '00',
            cvc: '000',
        }
        
        props.onSetCardInfo(resetCardInfo)
    }

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 3000);
    }, [error])

    return (
        <div className='form_container'>
            <div className='error-message'>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">NOME DO TITULAR</label>
                <input type="text" placeholder='ex. Anna Guimarães' value={name} onChange={handleNameChange} />
                <label htmlFor="">NUMÉRO DO CARTÃO</label>
                <input type="text" placeholder='ex. 1234 5678 9321 0000' value={cc_format(cardNumber)} onChange={handleCardNumberChange} />
                <div className='card-details'>
                    <div className='valid-thru'>
                        <label htmlFor="">DATA DE VALIDADE</label>
                        <div className='valid-thru-inputs'>
                            <input type="text" placeholder='MM' value={month} onChange={handleMonthChange} />
                            <input type="text" placeholder='YY' value={year} onChange={handleYearChange} />
                        </div>
                    </div>
                    <div className='cvc'>
                        <label htmlFor="">CVC</label>
                        <input type="text" placeholder='ex. 234' value={cvc} onChange={handleCvcChange} />
                    </div>
                </div>
                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}

export default Form