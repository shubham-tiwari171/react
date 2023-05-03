import React, { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(120);
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft])

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
        <div>
            Next otp send after: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}

export default Countdown;
