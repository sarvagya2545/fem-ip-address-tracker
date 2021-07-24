import React, { useEffect, useRef } from 'react';
import useMap from '../hooks/useMap';

const Map = () => {
    const { locateToCurrentLocation, changePosition } = useMap('ipMap');

    useEffect(() => {
        locateToCurrentLocation();
    }, []);

    return (
        <div className="map-container">
            <div className="map-box" id="ipMap"></div>
        </div>
    );
}

export default Map;