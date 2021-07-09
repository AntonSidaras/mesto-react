import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import loader from "../images/profile/Load.gif" 
import cardLoader from "../images/profile/Card-load.gif"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({name: "Идёт загрузка...", avatar: loader, about: "", _id: 0});
  const [cards, setCards] = React.useState([{createdAt: "", likes: [], link: cardLoader, name: "", owner: {}, _id: ""}]);

  React.useEffect(() => {

    api.getUserInfo()
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((error) => {
     alert(error);
    });

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

  function handleCardClick(card){
    setSelectedCard(card);
  }

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser({name, about}){
    api.setUserInfo({
      newName: name, 
      newAbout: about
    })
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((error) => {
      alert(error);
    })
    .finally(()=>{
      closeAllPopups();
    });
  }

  function handleUpdateAvatar({avatar}){
    api.updateAvatar(avatar)
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((error) => {
      alert(error);
    })
    .finally(()=>{
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit({title, link}){
    api.createNewCard({
      newTitle: title,
      newLink: link
    })
    .then((result) => {
      setCards([result, ...cards]);
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      closeAllPopups();
    });
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main
          cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}
          onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}
        />
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
        <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonCaption="Да"/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;