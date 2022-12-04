import classes from './Contacts.module.css';
import React from 'react';

function Contacts() {
  return (
    <div className={classes.contacts}>
        <div className={classes.upper}>
            <div>
                <h1>Загородный клуб «Роджер»</h1>
                <p>Идеальное место отдыха для детей и взрослых. 
                Находится в экологически чистом районе в 20 минутах езды 
                от городов Саратова и Энгельса, на полуострове, окруженном рекой Волгой.</p>
                <div className={classes.display}>
                    <img src="images/home_logo.png"></img>
                    <p>г. Энегльс, ул. Лесокомбинатская 30 </p>
                </div>
                <div className={classes.display}>
                    <img src="images/phone_icon.png"></img>
                    <p>8 (8452) 255-855</p>
                </div>
                <div className={classes.display}>
                    <img src="images/email_logo.png"></img>
                    <p>255-855@mail.ru</p>
                </div>
                <div className={classes.display}>
                    <img src="images/inst_blue.png"></img>
                    <img src="images/whatsapp_blue.png"></img>
                    <img src="images/tg_blue.png"></img>
                </div>
            </div>
            <img src="images/location.png"></img>
        </div>
        <img src="/images/map.png"></img>
    </div>
  );
}

export default Contacts;
