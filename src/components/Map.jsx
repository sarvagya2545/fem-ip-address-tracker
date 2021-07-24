import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        console.log('useeffect called');
        if (!mapRef.current) 
            createMap();

        if(mapRef.current && !markerRef.current)
            createMarker();
    }, []);

    const createMap = () => {
        const myMap = L.map('ipMap').setView([0, 0], 1);
        let accessToken = process.env.MAPBOX_ACCESS_TOKEN;
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

    const createMarker = () => {
        const markerIcon = L.icon({
            iconUrl: '/images/icon-location.svg',
            shadowUrl: '',
            iconSize: [20,25],
            iconAnchor: [10, 25],
            popupAnchor: [0, -12.5]
        });


        const marker = L.marker([51.5, -0.09], { icon: markerIcon })
            .addTo(mapRef.current)
            .bindPopup('I am somewhere');
        markerRef.current = marker;
    }

    return (
        <div className="map-container">
            <div className="map-box" id="ipMap"></div>
        </div>
    );
}

export default Map;