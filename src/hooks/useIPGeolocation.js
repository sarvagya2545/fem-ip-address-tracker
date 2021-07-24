import { useEffect, useState } from "react";
import axios from 'axios';

const useIPGeolocation = () => {
    const [ip, setIp] = useState(null);
    const [location, setLocation] = useState({
        region: '',
        country: '',
        city: ''
    });
    const [isp, setIsp] = useState(null);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        (async () => {
            if(ip !== null) {
                await getLocation();
            }
            else {
                await getDefaultLocation();
            }
        })();
    }, [ip]);

    const getLocation = async () => {
        const url = `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&ipAddress=${ip}`;
        setLoad(true);
        
        try {
            const result = await axios.get(url);
            console.log(result);
            setLocation(result.data.location);
            setIsp(result.data.isp);
        } catch (error) {
            console.log(error);
        }

        setLoad(false);
    }

    const getDefaultLocation = async () => {
        // https://api.ipify.org
        try {
            const res = await axios.get('https://api.ipify.org');
            setIp(res.data);
        } catch (error) {
            console.log(error);
        }
        setLoad(false);
    }

    const changeIp = (newIp) => setIp(newIp);

    return {
        changeIp,
        ip,
        location,
        isp,
        load
    }
}

export default useIPGeolocation;