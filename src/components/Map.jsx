import React, { useEffect, useState } from 'react';
import L from 'leaflet';

const Map = () => {
    const [map, setMap] = useState(null);

    // useEffect(() => {
    //     const myMap = L.map('mapid').setView([51.505, -0.09], 13);
    //     let accessToken = 'pk.eyJ1Ijoic2FydmFneWEyNTQ1IiwiYSI6ImNrcmhuZ2F3ajBteW4ycHBrY3YzdjU5anQifQ.csBvrjRKTrh4ZqKn0RZXNw';
    //     let url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`;
    //     const config = {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 18,
    //         id: 'mapbox/streets-v11',
    //         tileSize: 512,
    //         zoomOffset: -1,
    //         accessToken: accessToken
    //     }

    //     L.tileLayer(url, config).addTo(myMap);

    // }, []);

    return (
        <div className="map-box" id="mapid">
            Map
        </div>
    );
}
 
export default Map;