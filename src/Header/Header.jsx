import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
        <img src='/images/main.logo.png'></img>
        <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink>Проживания</NavLink></li>
            <li><NavLink to="/restaurants">Рестораны</NavLink></li>
            <li><NavLink to="/chill">Отдых на территории</NavLink></li>
            <li><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>
        <div className={classes.telephone}>
            <img src="images/phone_icon.png"></img>
            <span>8 (8452) 255-855</span>
        </div>
    </div>
  );
}

export default Header;
