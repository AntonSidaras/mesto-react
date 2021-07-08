import React from 'react';
import Card from "./Card";
import api from "../utils/api";
import loader from "../images/profile/Card-load.gif"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([{createdAt: "", likes: [], link: loader, name: "", owner: {}, _id: ""}]);

  React.useEffect(() => {

    api.getInitialCards()
    .then((result) => {
      setCards(result);
      console.log(result);
    })
    .catch((error) => {
      alert(error);
    });

  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(isLiked){
      api.dislikeCard(card._id)
      .then((result) => {
        setCards((state) => state.map((c) => c._id === card._id ? result : c));
      })
      .catch((error) => {
        alert(error);
      });
    }
    else{
      api.likeCard(card._id)
      .then((result) => {
        setCards((state) => state.map((c) => c._id === card._id ? result : c));
      })
      .catch((error) => {
        alert(error);
      });
    }
  } 

  function handleCardDelete(card) {
    api.removeCard(card._id)
    .then(() => {
      setCards((state) => state.filter(c => c._id !== card._id));
    })
    .catch((error) => {
      alert(error);
    });
  }

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
          <div className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))}
      </section>
    </main>
    
  );
}

export default Main;