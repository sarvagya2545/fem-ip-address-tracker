import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

// config
const initialView = [0,0];
const initialZoom = 1;
const iconSize = 7;
const iconLength = 4 * iconSize;
const iconHeight = 5 * iconSize;

const Map = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) 
            createMap();

        setLocation();
    }, []);

    const setLocation = () => {
        mapRef.current.locate({setView: true, maxZoom: 16});
        mapRef.current.on('locationfound', onLocationFound);
        mapRef.current.on('locationerror', onLocationError);
    }

    const onLocationFound = (e) => {
        if(mapRef.current && !markerRef.current)
            createMarker(e.latlng);
    }

    const onLocationError = (e) => {
        alert(e.message);
    }

    const createMap = () => {
        const myMap = L.map('ipMap').setView(initialView, initialZoom);
        let url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`;
        const config = {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: process.env.MAPBOX_ACCESS_TOKEN
        };

        const tiles = L.tileLayer(url, config);
        tiles.addTo(myMap);

        mapRef.current = myMap;
    }

    const createMarker = (position) => {
        const markerIcon = L.icon({
            iconUrl: '/images/icon-location.svg',
            shadowUrl: '',
            iconSize: [iconLength,iconHeight],
            iconAnchor: [iconLength/2, iconHeight],
            popupAnchor: [0, -iconHeight/2]
        });


        const marker = L.marker(position, { icon: markerIcon })
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