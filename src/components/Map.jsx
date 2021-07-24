import React from 'react';
import Loader from 'react-loader-spinner';

const Map = ({ load }) => {

    return (
        <div className="map-container">
            <div className="map-box" id="ipMap"></div>
            {load && <div className="loader">
                <Loader
                    type="Grid"
                    color="#fff"
                />
            </div>}
        </div>
    );
}

export default Map;