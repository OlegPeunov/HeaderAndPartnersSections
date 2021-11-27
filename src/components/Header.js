import React from "react";
import logoPath from '../images/logo.svg';
import searchIconPath from '../images/search-icon.svg';
import photoPath from '../images/avatar1.svg';
import userButtonPath from '../images/mobile-user-icon.svg';

function Header() {
  return (
    <header className="header">
      <img alt='logo' className="logo" src={logoPath}/>
      <form className="form">
        <button type="submit" className="form__serch-button"><img alt='logo' className="form__serch-icon" src={searchIconPath}/></button>
        <input type="text" className="form__serch-box" placeholder="Найти..." value="" />
      </form>
      <button type="submit" className="header__mobile-user-button"><img alt='user-profile-button' className="header__mobile-user-icon" src={userButtonPath}/></button>
      <div className="user-info">
        <h2 className="user-info__name">Константин</h2>
        <img alt='avatar'className="user-info__photo" src={photoPath}/>
      </div>
    </header>
  );
}

export default Header;