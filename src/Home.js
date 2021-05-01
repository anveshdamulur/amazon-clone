import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://img.plusdebonsplans.com/2020/03/amazon-prime-video.jpg" alt="" srcset=""/>
            
            {/* product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id = "001"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {5}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
                <Product
                    id = "002"
                    title ="Nouveau Apple iPhone 12 Pro Max (256 Go) - Bleu Pacifique"
                    price ={1250.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71CaXdX4AJL._AC_SL1500_.jpg"
                />
                 <Product
                    id = "003"
                    title ="Nouveau Apple iPhone 12 Mini (256 Go) - (Product) Red"
                    price ={919}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/710VoHAhsjL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "004"
                    title ="STRONG SRT32HC4043 HD LED TV, écran 80cm, 32 Pouces, Triple Tuner (DVB-T2 HEVC265/C/S2), 60 Hz, Son Dolby Audio Digital, HDMI x2, USB Multimédia, Optique, CI+, Compatible FRANSAT"
                    price ={189.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61ZRdga43hL._AC_SL1000_.jpg"
                />
                 <Product
                    id = "005"
                    title ="Nouvel Echo Dot (4e génération), Enceinte connectée avec horloge et Alexa, Blanc"
                    price ={49.99}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/617uaPe8gzL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "006"
                    title ='Case Logic VNAi215 Sacoche en nylon pour Ordinateur portable 15.6 "/ Noir'
                    price ={23.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/91HESE7M%2BTL._AC_SL1500_.jpg"
                />
            </div>
           
        </div>
    )
}

export default Home
