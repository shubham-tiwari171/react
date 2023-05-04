import './Dogfetch.css'
import { useEffect, useRef, useState } from 'react';
export function DogFetcher() {
    const imageRef = useRef('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((data) => data.json())
            .then((response) => imageRef.current.src = response.message)
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <div className="card alignments">
                <div className="content d-flex justify-content-center align-items-center">
                    <img className="image-center" ref={imageRef} alt="dog image" />
                </div>
                <div className="content d-flex justify-content-center align-items-center mt-3">
                    <button className="btn btn-primary" >Change Image</button>
                </div>
            </div>
        </>
    );
}