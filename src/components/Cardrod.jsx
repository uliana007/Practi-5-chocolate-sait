import React, { useState } from 'react';
import CardData from './Carddoch';

const CardRod = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {CardData.map((card, index) => (
        <div key={index} style={{ flexBasis: '30%', marginBottom: '20px' }}>
          <div style={{ width: '300px', margin: 'auto', border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img src={card.image} alt={card.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>{card.weight}</p>
            <button style={{ borderRadius: '20px', padding: '10px 20px' }} onClick={() => openPopup(card)}>Подробнее</button>
          </div>
        </div>
      ))}
      {selectedCard && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '40px', border: '1px solid #ccc', width: '600px', height: '600px', textAlign: 'center' }}>
          <p style={{ position: 'absolute', top: '500px', left: '50%', transform: 'translateX(-50%)' }}>{selectedCard.weight}</p>
          <img src={selectedCard.image} alt={selectedCard.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
          <h3>{selectedCard.title}</h3>
          <p>{selectedCard.description}</p>

          <button style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', borderRadius: '20px', padding: '10px 20px' }} onClick={closePopup}>Закрыть</button>
        </div>
      )}
    </div>
  );
};


export default CardRod;

  