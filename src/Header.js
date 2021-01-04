import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    console.log(user);

    return (
        <div className="header">

            <p className="header__line"><DehazeOutlinedIcon /></p>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
            </Link>

            <div className="header__address">
                <LocationOnIcon />
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Select your address</span>
                </div>
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                {/* Sign out Important */}
                <Link to={!user && '/login'}> 
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
