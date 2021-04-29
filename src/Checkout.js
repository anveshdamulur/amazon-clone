import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
const Checkout = () => {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2021/FASHION/CML/01_MARCH/MERCH/GW/GW_DESKTOP_HERO_1500X600_MEN._CB657017433_.jpg" alt="" srcset=""/>
                {basket?.length === 0 ?(
                    <div>
                        <h2>Your shopping Basket is empty</h2>
                    </div>
                ): (
                    <div>
                        <h2 className="checkout__title">Your basket is {basket?.length}</h2>
                        {/* List out all of the checkout product */}
                        {
                            basket.map(item =>(
                            <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image ={item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                            />
                            ))
                        }
                    </div>
                )}
            </div>
            
                {
                    basket.length > 0 && (
                        <div className="checkout__right">
                            <SubTotal />
                        </div>
                    )
                }
        </div>
    )
}

export default Checkout
