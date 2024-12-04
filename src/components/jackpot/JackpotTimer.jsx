import React, { useState, useEffect } from 'react'
const JackpotTimer = () => {

    const [time, setTime] = useState({
        hours: 2,
        minutes: 22,
        seconds: 0,
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                seconds += 1;
                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };
    return (
        <>
            <span>
                {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
            </span>
        </>
    )
}

export default JackpotTimer