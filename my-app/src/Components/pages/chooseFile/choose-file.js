import { useRef } from 'react'
import './choose-file.css'

export default function ChooseFile(props) {
    const inputRef = useRef();
    function handleClick() {
        // console.log(inputRef)
        inputRef.current.click();

    }

    // function handleClick(e) {
    //     console.log(typeof guessNumber);
    //     setCount(count + 1);

    //     if ((typeof guessNumber) === "string") {
    //         alert("PLease enter number in the input box ex:-1,2,3,4");
    //         setguessNumber('')
    //         return
    //     }

    //     if ((guessNumber) === '' || guessNumber === null || guessNumber === undefined) {
    //         setguessNumber('')
    //         alert("PLease fill some number in the input box");
    //         return
    //     }

    //     if (Number(guessNumber) < 0 || Number(guessNumber) > 10) {
    //         alert("PLease enter no between 0 to 10");
    //         setguessNumber('')
    //         return
    //     }

    //     if (randomNumber === Number(guessNumber)) {
    //         setrandomNumber(Math.floor(Math.random() * 10) + 1);
    //         attempts = count === 0 ? 1 : count;
    //         alert(`Congratulations! You guessed the right number in ${attempts} attempt.`);
    //         setCount(0);
    //     }
    //     else if (Number(guessNumber) > randomNumber) {
    //         alert("You guessed a bigger number");
    //     }
    //     else {
    //         alert("You guessed a smaller number");
    //     }
    //     setguessNumber('')
    // }
    return (
        <>
            <div className="alignments">
                <div className="content">
                    {/* <div className="gap"><h3>Lucky number game</h3></div> */}
                    <div className="d-flex justify-content-between">
                        <div>
                            {/* <input type="text" value={guessNumber} className="form-control" placeholder="Enter Number to guess" onChange={handleOnChange} /> */}
                            <input type="file" ref={inputRef} />
                        </div>
                        <div><button id="sadhakjdkad" className="btn btn-primary" onClick={handleClick}>Choose File</button ></div>
                    </div>
                    {/* <div className="gap"><h4>No of attemptes: {count}</h4></div> */}
                    {/* <div className="gap"><h4>Random no: {randomNumber}</h4></div> */}
                </div>
            </div >
        </>
    )
}