import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

// config
const initialView = [0,0];
const initialZoom = 1;
const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`;
const iconSize = 7;
const iconLength = 4 * iconSize;
const iconHeight = 5 * iconSize;

const useMap = (mapid) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [position, setPosition] = useState([0,0]);

    useEffect(() => {
        if(!mapRef.current)
            createMap();
        else 
            mapRef.current.panTo(position).setZoom(16);

        if(!markerRef.current)
            createMarker(position);
        else
            markerRef.current.setLatLng(position);

    }, [position]);

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

    const createMap = () => {
        const myMap = L.map(mapid).setView(initialView, initialZoom);
        
        const config = {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            accessToken: process.env.MAPBOX_ACCESS_TOKEN
        };

        const tiles = L.tileLayer(url, config);
        tiles.addTo(myMap);

        mapRef.current = myMap;
    }

    const changePosition = (newPos) => setPosition(() => newPos);

    const locateToCurrentLocation = () => {
        mapRef.current.locate({setView: true, maxZoom: 16});
        mapRef.current.on('locationfound', onLocationFound);
        mapRef.current.on('locationerror', onLocationError);
    }

    const onLocationFound = (e) => {
        changePosition(e.latlng)
    }

    const onLocationError = (e) => {
        alert(e.message);
    }

    return {
        changePosition,
        mapRef,
        locateToCurrentLocation
    }
}

export default useMap;