import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_img' src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="Background" />

                <div className="home_row">
                    <Product 
                        id="23467853"
                        title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018. The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback' 
                        price={29.56} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg' 
                        rating={5} 
                    />
                    <Product 
                        id="23467453"
                        title='The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback. The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback' 
                        price={58.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51HFh0fdfhL._SX331_BO1,204,203,200_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product 
                       id="23468953"
                       title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018. The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback' 
                        price={29.56} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg' 
                        rating={5} 
                    />
                    <Product 
                        id="23466753"
                        title='The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback' 
                        price={58.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51HFh0fdfhL._SX331_BO1,204,203,200_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="23464353"
                        title='The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback. The lean startup:How Constant Inovation Creates Radically Sucessful Businesses Paperback' 
                        price={58.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51HFh0fdfhL._SX331_BO1,204,203,200_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="23456853"
                        title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018' 
                        price={29.56} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg' 
                        rating={5} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
