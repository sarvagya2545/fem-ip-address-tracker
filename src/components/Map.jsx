import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        console.log('useeffect called');
        if(!mapRef.current) {
            const myMap = L.map('ipMap').setView([0,0], 1);
            console.log(myMap);
            let accessToken = 'pk.eyJ1Ijoic2FydmFneWEyNTQ1IiwiYSI6ImNrcmhuZ2F3ajBteW4ycHBrY3YzdjU5anQifQ.csBvrjRKTrh4ZqKn0RZXNw';
            let url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`;
            const config = {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                accessToken: accessToken
            }
    
            const tiles = L.tileLayer(url, config);
            tiles.addTo(myMap);
            
            mapRef.current = myMap;
        } 
    }, []);

    return (
        <div className="map-container">
            <div className="map-box" id="ipMap"></div>
        </div>
    );
}
 
export default Map;