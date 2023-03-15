import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
          alt="Background"
        />

        <div className="home_row">
          <Product
            id="23467853"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et,
          commodi incidunt quas nam amet in quam, nobis labore
          "
            price={29.56}
            image="https://solaroidenergy.com/wp-content/uploads/2023/02/dell-laptop-price-in-usa-2.jpg"
            rating={5}
          />
          <Product
            id="23467453"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et,
          commodi incidunt quas nam amet in quam, nobis labore
          "
            price={58.0}
            image="https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="23468953"
            title="Lorem i,
          commodi incidunt quas nam amet in quam, nobis labore
          "
            price={59.01}
            image="https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="23466753"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et,
          commodi
          "
            price={58.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51HFh0fdfhL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="23464353"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et,
          
          "
            price={58.78}
            image="https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="23456853"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et,
          commodi incidunt quas nam amet in quam, nobis labore
          "
            price={29.56}
            image="https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
