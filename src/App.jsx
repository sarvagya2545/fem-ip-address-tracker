// hooks & React
import React, { useEffect, useState } from 'react';
import useMap from './hooks/useMap';
import useIPGeolocation from './hooks/useIPGeolocation';

// style sheet entry point
import './scss/main.scss';

// components
import Map from './components/Map';
import TopBg from './components/TopBg';
import Input from './components/Input';
import Details from './components/Details';

const App = () => {
    const { changePosition } = useMap('ipMap');
    const { ip, changeIp, location, isp, load: ipLoad } = useIPGeolocation(); 

    useEffect(() => {
        changePosition([location?.lat || 0, location?.lng || 0]);
    }, [location]);

    return (
        <div className="app">
            <TopBg>
                <Input changeIp={changeIp}/>
            </TopBg>
            <Details location={location} isp={isp} ip={ip} load={ipLoad}/>
            <Map load={ipLoad}/>
        </div>
    )
}

export default App;
