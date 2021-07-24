import React from 'react';

const Details = () => {
    return (
        <div className="details">
            <div className="details__item">
                <p>IP Address</p>
                <h1>192.272.182.182</h1>
            </div>
            <div className="details__item">
                <p>Location</p>
                <h1>Brooklyn, NY, 10001</h1>
            </div>
            <div className="details__item">
                <p>TimeZone</p>
                <h1>UTC - 5:00</h1>
            </div>
            <div className="details__item">
                <p>ISP</p>
                <h1>SpaceX Starlink</h1>
            </div>
        </div>
    );
}
 
export default Details;