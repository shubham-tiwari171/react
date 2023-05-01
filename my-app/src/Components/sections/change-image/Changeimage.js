import './Changeimage.css';
import { useEffect, useRef, useState } from 'react';
export default function ChangeImage() {
    const imageRef = useRef('');

    useEffect(() => {
        let imageUrl = Math.floor(Math.random() * 5) + 1;
        imageRef.current.src = `./${imageUrl}.jpg`;
    }, []);

    const handleChangeImage = () => {
        let imageUrl = Math.floor(Math.random() * 5) + 1;
        imageRef.current.src = `./${imageUrl}.jpg`;
    };

    return (
        <>
            <div className="card alignments">
                <div className="content d-flex justify-content-center align-items-center">
                    <img ref={imageRef} style={{ height: "400px", width: "500px" }} alt="Image" />
                    <div className="card-body d-flex justify-content-center align-items-center">
                        {/* <button id='left'><i className="fa-solid fa-arrow-left fa-2xl" onClick={handleLeftClick}></i></button> */}
                        <button id='right'><i className="fa-sharp fa-solid fa-arrow-right fa-2xl" onClick={handleChangeImage}></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}