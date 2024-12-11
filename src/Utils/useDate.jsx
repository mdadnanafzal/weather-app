import { useState, useEffect } from 'react';

export const useDate = () => {
    const locale = 'en';
    const [time, setTime] = useState(new Date().toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric' }));
        }, 60000); 

        return () => clearInterval(timer); 
    }, []); 

    return {
        time,
    };
};
