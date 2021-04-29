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
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {5}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
                <Product
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {4}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
                 <Product
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {6}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {2}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
                 <Product
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {1}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id = "123123123"
                    title ="The Lean Startup: How constant Innovation create a history."
                    price ={11.96}
                    rating = {5}
                    image = "https://des-livres-pour-changer-de-vie.com/wp-content/uploads/2018/12/Lean-Startup.jpg"
                />
            </div>
           
        </div>
    )
}

export default Home
