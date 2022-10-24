import { useState } from 'react';
import './App.css';
import CardBackSide from './components/CardBackSide/CardBackSide';
import CardFrontSide from './components/CardFrontSide/CardFrontSide';
import Form from './components/form/Form';

function App() {
  const [cardInfo, setCardInfo] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  })

  return (
    <div className="App">
      <div className='left__column'>
          <CardFrontSide cardInfo={cardInfo}/>
          <CardBackSide cardInfo={cardInfo}/>
      </div>
      <div className='right__column'>
        <Form 
          cardInfo={cardInfo}
          onSetCardInfo={setCardInfo}
        />
      </div>
    </div>
  );
}

export default App;
