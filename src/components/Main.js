import profilePhoto from "../images/profile/Avatar.png"
import React from 'react';
import Card from "./Card";
import Api from "../utils/Api";

function Main(props) {

  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь Океана");
  const [userAvatar, setUserAvatar] = React.useState(profilePhoto);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    Api.getUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((error) => {
      console.log(error);
    });

    Api.getInitialCards()
    .then((result) => {
      setCards(result);
    })
    .catch((error) => {
      console.log(error);
    });

  });

  return (
    <main>
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <div className="profile__avatar-overlay"></div>
          <img className="profile__avatar" src={userAvatar} alt="Фото профиля"/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((item, i) => (
          <Card key={i} card={item}/>
        ))}
      </section>
    </main>
    
  );
}

export default Main;