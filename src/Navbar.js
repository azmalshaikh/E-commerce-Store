import React from 'react';
import "./Navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <div className="navbar__option">
                <span>Gift Cards</span>
            </div>
            <div className="navbar__option">
                <span>Best Sellers</span>
            </div>
            <div className="navbar__option">
                <span>Mobiles</span>
            </div>
            <div className="navbar__option">
                <span>Today's Deals</span>
            </div>
            <div className="navbar__option">
                <span>Prime</span>
            </div>
            <div className="navbar__option">
                <span>New Releases</span>
            </div>
            <div className="navbar__option">
                <span>Computers</span>
            </div>
            <div className="navbar__option">
                <span>Amazon Pay</span>
            </div>
        </div>
    )
}

export default navbar
