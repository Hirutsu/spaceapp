import React from 'react';
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.footer_upper}>
            <div>
                <p>Адрес:  г. Энгельс, ул. Лесокомбинатская</p>
                <p>Телефон:  8 (8452) 255-855</p>
            </div>
            <img src='/images/main_logo_white.png'></img>
            <div>
                <p>Правила проживания</p>
                <p>Правила бронирования</p>
            </div>
        </div>
        <div className={classes.footer_lower}>
            <div>
                <img src="/images/inst_logo.png"></img>
                <img src="/images/whatsapp_logo.png"></img>
                <img src="/images/tg_logo.png"></img>
            </div>
            <div>
                <p>© 2021 Загородный клуб Роджер. Все права защищены.</p>
            </div>
            <img src="/images/spaceapp_logo.png"></img>
        </div>
    </div>
  );
}

export default Footer;
