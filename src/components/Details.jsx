import React from 'react';

const Details = ({ ip, isp, location: { region, country, city, timezone } }) => {
    return (
        <div className="details">
            <div className="details__item">
                <p>IP Address</p>
                <h1>{ip}</h1>
            </div>
            <div className="details__item">
                <p>Location</p>
                <h1>{`${region}, ${city}, ${country}`}</h1>
            </div>
            <div className="details__item">
                <p>TimeZone</p>
                <h1>UTC {timezone}</h1>
            </div>
            <div className="details__item">
                <p>ISP</p>
                <h1>{isp}</h1>
            </div>
        </div>
    );
}
 
export default Details;