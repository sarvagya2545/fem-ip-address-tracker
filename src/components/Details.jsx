import React from 'react';
import Loader from 'react-loader-spinner';

const Details = ({ ip, isp, location: { region, country, city, timezone }, load }) => {

    return (
        <div className="details">
            {load ? (
                <div className="loader">
                    <Loader
                        type="TailSpin"
                        color="#000"
                    />
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}
 
export default Details;