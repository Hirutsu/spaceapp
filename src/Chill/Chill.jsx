import classes from './Chill.module.css';
import React from 'react';

function Chill() {
  return (
    <div className={classes.chill}>
        <div className={classes.chillitem}>
            <img src="/images/chillitem1.png"></img>
            <div>
              <p>На VIP-зоне расположены бассейны до 29 градусов, лежаки с зонтами 
              и перголы для комфортного отдыха. В баре вам всегда готовы предложить прохладительные напитки.</p>
              <h5>Вход в зону бассейнов:</h5>
              <p>Понедельник - пятница - <b>700 ₽</b></p>
              <p>Суббота - восркресенье и праздничные дни - <b>1000 ₽</b></p>
              <p>(для детей до 5 лет - <b>бесплатно</b>, 5-14 лет - <b>скидка 50%</b>)</p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem2.png"></img>
            <div>
            <h5>Аренда беседки:</h5>
            <p>Понедельник - пятница - <b>250 ₽/час</b></p>
            <p>Суббота - воскресенье и праздничные дни - <b>500 ₽/час</b></p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem3.png"></img>
            <div>
              <h5>Стоимость:</h5>
              <p>Уточняйте у администраторов - тел.: <b>8 (8452) 255855</b></p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem4.png"></img>
            <div>
              <h5>Стоимость:</h5>
              <p>До 10 человек - <b> 1500 ₽/час</b></p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem5.png"></img>
            <div>
              <h5>Стоимость:</h5>
              <p>До 10 человек - <b> 1500 ₽/час</b></p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem6.png"></img>
            <div>
              <p>Перголы и лежаки для родителей, "лягушатник", горка и веселые аниматоры для детей - детская зона расположена рядом с VIP-зоной</p>
            </div>
        </div>
        <div className={classes.chillitem}>
            <img src="/images/chillitem7.png"></img>
            <div>
              <p>2 больших песчаных солярия с шезлонгами и зонтами.</p>
              <h5>Стоимость:</h5>
              <p>Вход - <b>200 ₽</b> </p> 
              <p>Шезлонг - <b>200 ₽/день</b> </p> 
              <p>Парковка автомобиля - <b> 300 ₽</b> </p> 
              <p>(для детей до 5 лет - <b>бесплатно</b>, 5 -14 лет - <b>скидка 50%</b>) </p> 
            </div>
        </div>
    </div>
  );
}

export default Chill;
