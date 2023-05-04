import './Dogfetch.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
export function DogFetcher() {
    const [dog, setDog] = useState('')

    async function handleClick() {
        let result = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDog(result.data.message);
    }

    return (

        <>
            <div className="card alignments">
                <div className="content d-flex justify-content-center align-items-center">
                    <img className="image-center" src={dog} alt="dog image" />
                </div>
                <div className="content d-flex justify-content-center align-items-center mt-3">
                    <button className="btn btn-primary" onClick={handleClick}>Change Image</button>
                </div>
            </div>
        </>
    );
}