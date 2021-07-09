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
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({name: "Идёт загрузка...", avatar: loader, about: "", _id: 0});

  React.useEffect(() => {

    api.getUserInfo()
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((error) => {
     alert(error);
    });
  }, []);

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

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main 
          onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}
        />
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
        <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonCaption="Да"/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;