import classes from './Restaurants.module.css';
import React from 'react';

function Restaurants() {
  return (
    <div className={classes.r}>
      <div className={classes.resta}>
          <div className={classes.restaitem}>
              <img src="/images/restaitem1.png"></img>
              <div>
                <p>Круглый год и в любую погоду ресторан принимает своих гостей 
                и обслуживает банкеты до 40 человек.</p>
                <p style={{color: '#308FA9'}}>Скачать меню</p>
              </div>
          </div>
          <div className={classes.restaitem}>
              <img src="/images/restaitem2.png"></img>
              <div>
                <p>Кафе на пляже, где всегда можно попробовать ароматный шашлык, сочные кебабы и узбекский плов, а еще в собственной коптильне всегда есть копченая рыба и мясо.</p>
                <p style={{color: '#308FA9'}}>Скачать меню</p>
              </div>
          </div>
          <div className={classes.restaitem}>
              <img src="/images/restaitem3.png"></img>
              <div>
                <p>Прекрасное место для свадеб и юбилеев до 80 человек.</p>
                <p style={{color: '#308FA9'}}>Скачать меню</p>
              </div>
          </div>
          <div className={classes.restaitem}>
              <img src="/images/restaitem4.png"></img>
              <div>
                <p>Идеальное место для свадеб, юбилеев и особых случаев.</p>
                <p style={{color: '#308FA9'}}>Скачать меню</p>
              </div>
          </div>
          <div className={classes.restaitem}>
              <img src="/images/restaitem5.png"></img>
              <div>
                <p>Прекрасное место для отдыха до 15 человек.</p>
                <p style={{color: '#308FA9'}}>Скачать меню</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Restaurants;
