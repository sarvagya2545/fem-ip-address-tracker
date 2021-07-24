import React from 'react';
import arrowImg from '/images/icon-arrow.svg';

const Input = () => {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <form className="form">
                <input type="text" placeholder="Search for any IP address or domain" />
                <button type="submit" className="form-btn">
                    <img src={arrowImg} alt="arrow" />
                </button>
            </form>
        </>
    );
}
 
export default Input;