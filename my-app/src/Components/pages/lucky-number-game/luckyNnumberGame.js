import { useState } from 'react'
import './luckyNumberGame.css'

export default function Luckynumbergame() {
    const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guessNumber, setguessNumber] = useState("");
    const [count, setCount] = useState(0);
    let attempts = 0
    function handleOnChange(event) {
        //event.preventDefault();
        setguessNumber(event.target.value);
        // setCount(count + 1);
    }

    function handleClick() {
        setCount(count + 1);
        if (guessNumber < 0 || guessNumber > 10) {
            alert("PLease enter no between 0 to 10");
            setguessNumber('')
            return
        }
        if (randomNumber === Number(guessNumber)) {
            setrandomNumber(Math.floor(Math.random() * 10) + 1);
            attempts = count === 0 ? 1 : count;
            alert(`Congratulations! You guessed the right number in ${attempts} attempt.`);
            setCount(0);
        }
        else if (Number(guessNumber) > randomNumber) {
            alert("You guessed a bigger number");
            //setCount(count + 1);
        }
        else {
            alert("You guessed a smaller number");
            //setCount(count + 1);
        }
        setguessNumber('')
    }
    return (
        <>
            <div className="alignments">
                <div className="content">
                    <div className="gap"><h3>Lucky number game</h3></div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="text" value={guessNumber} className="form-control" placeholder="Enter Number to guess" onChange={handleOnChange} />
                        </div>
                        <div><button className="btn btn-primary" onClick={handleClick}>Submit</button ></div>
                    </div>
                    {/* <div className="gap"><h4>No of attemptes: {count}</h4></div> */}
                    <div className="gap"><h4>Random no: {randomNumber}</h4></div>
                </div>
            </div >
        </>
    )
}