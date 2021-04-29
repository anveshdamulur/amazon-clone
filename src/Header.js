import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingbasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './fireBase';
function Header(){
    const [{basket , user}] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    };
    console.log(basket)
    return(
    <nav className="header">
        <Link to="/">
            {/* logo on the left -> img */}
            <img className="header__logo" src="https://thedomesticatedman.files.wordpress.com/2013/10/amazon-banner.png" alt="" srcset="" />
        </Link>
        {/* search box */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 links on the right */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionLineOne">Hello{user?.email}</span>
                    <span className="header__optionLineTwo">{user ? "Sign Out" :"Sign In"}</span>
                </div>
            </Link>

            {/* 2nd link */}
            <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            
            {/* 3rd link */}
            <Link className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
        </div>
        {/* 4 th Basket icon */}
        <Link to="/checkOut" className="header__link">
            <div className="header__optionBasket">
                {/* Shopping basket icon */}
              <ShoppingbasketIcon />
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>
    </nav>
    )
}

export default Header;
