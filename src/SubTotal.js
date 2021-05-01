import React from 'react'
import "./SubTotal.css";
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';
const SubTotal = () => {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
    console.log(getBasketTotal(basket))
    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items : <strong>{`${value}`}</strong>)
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order conatins gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value ={getBasketTotal(basket)}
                displayType ={"text"}
                thousandSeparator = {true}
                prefix = {"€"}
            /> 
            <Link >
                <button>Proceed to Checkout</button>
            </Link>
           
        </div>
    )
}

export default SubTotal
