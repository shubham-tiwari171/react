import './Counter.css';
import { useState } from 'react'
export default function Nameupdater() {
    const [name, setName] = useState("");
    const [headingText, setHeadingText] = useState("");

    function handleOnChange(event) {
        setName(event.target.value);
    }
    function handleClick() {
        setHeadingText(name);
        setName('');
    }
    return (
        <>
            <div className="alignments">
                <div className="content">
                    <div className="gap"><h1>Name </h1></div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="text" className="form-control" value={name} placeholder="Enter your text" onChange={handleOnChange} />
                        </div>
                        <div><button className="btn btn-primary" onClick={handleClick}>Submit</button ></div>
                    </div>
                    <div className="gap"><h4>Hii my name is: {headingText}</h4></div>
                </div>
            </div >
        </>
    )
}