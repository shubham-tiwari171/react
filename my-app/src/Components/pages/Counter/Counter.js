import { useState, useEffect } from 'react';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(120);
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft])

    function start() {
        setTimeLeft(35990);
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    let hour = Math.floor(minutes / 60)
    return (
        <>
            <div>
                Time{hour}: {(minutes = minutes >= 60 ? 0 : minutes)}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <button onClick={start}>Start</button>
        </>
    );
}

export default Countdown;
