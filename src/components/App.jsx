import {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import cards from '../utils/data.json'

function App() {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handlerEsc = (evt) => {
    evt.key === 'Escape' && closeAllPopups();
  };

  const handleOverlayClose = (evt) => {
    evt.target === evt.currentTarget && closeAllPopups();
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerEsc);
    return () => {
      document.removeEventListener('keydown', handlerEsc);
    };
  }, []);


  function closeAllPopups() {
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }


  function handle(card) {
    setSelectedCard(card);
  }

  return (
      <>
        <Header/>
        <Main
          onCardClick={handleCardClick}
          onCardDelete={handle}
          cards={cards}
        />
        <Footer/>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          onMouseDown={handleOverlayClose}
        />
      </>
  );
}

export default App;
