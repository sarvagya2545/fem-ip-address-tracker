import React, { useState } from 'react';
import arrowImg from '/images/icon-arrow.svg';

const Input = ({ changeIp }) => {
    const [ipInputField, setIpInputField] = useState('');

    // credits:
    // https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
    const regexPattern = "^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$";

    const onChangeInput = e => {
        setIpInputField(e.target.value);
    }

    const submitIp = e => {
        e.preventDefault();
        changeIp(ipInputField);
    }

    return (
        <>
            <h1>IP Address Tracker</h1>
            <form className="form" onSubmit={submitIp}>
                <input type="text" placeholder="Search for any IP address or domain" value={ipInputField} onChange={onChangeInput} pattern="^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$"/>
                <button type="submit" className="form-btn">
                    <img src={arrowImg} alt="arrow" />
                </button>
            </form>
        </>
    );
}
 
export default Input;