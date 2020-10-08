import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{ user, basket }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>

                    

                    <Link to={!user && '/login'}>
                        <span className="header__optLineTwo" onClick={handleAuthentication}>
                            {!user ? 'Sign In' : 'Sign Out'}
                        </span>
                    </Link>
                </div>

                <div className="header__option">
                    <span className="header__optLineOne">
                        Returns
                    </span>
                    <span className="header__optLineTwo">
                        Orders
                    </span>
                </div>
                
                <div className="header__option">
                    <span className="header__optLineOne">
                        Your
                    </span>
                    <span className="header__optLineTwo">
                        Prime
                    </span>
                </div>


                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
                
        </div>
    )
}

export default Header
