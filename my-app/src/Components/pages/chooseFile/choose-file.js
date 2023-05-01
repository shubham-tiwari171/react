import { useRef } from 'react'
import './choose-file.css'

export default function ChooseFile() {
    const inputRef = useRef();
    function handleClick() {
        inputRef.current.click();

    }

    return (
        <>
            <div className="alignments">
                <div className="content">

                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="file" ref={inputRef} />
                        </div>
                        <div><button id="sadhakjdkad" className="btn btn-primary" onClick={handleClick}>Choose File</button ></div>
                    </div>
                </div>
            </div >
        </>
    )
}