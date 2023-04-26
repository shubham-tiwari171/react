import './Counter.css'
import { useState } from 'react';
export default function Counter() {


    const [rightCount, setrightCount] = useState(0)
    const [leftCount, setLeftCount] = useState(10 - rightCount)
    function handelDecreaseClick() {
        if (rightCount > 0) {
            setrightCount(rightCount - 1)
            setLeftCount(leftCount + 1)
        }
    }
    function handelIncreaseClick() {
        if (leftCount > 0) {
            setrightCount(rightCount + 1)
            setLeftCount(leftCount - 1)
        }
    }
    return (
        <>

            <div className='button-arrangement'>
                <div style={{ width: "100px" }}>
                    <h1>{leftCount}</h1>
                    <button className="btn btn-danger" onClick={handelDecreaseClick}> Decrease</button>
                </div>
                <div style={{ width: "100px" }}>
                    <h1>{rightCount}</h1>
                    <button className="btn btn-primary" onClick={handelIncreaseClick}> Increase</button>
                </div>
            </div>

        </>
    )
}