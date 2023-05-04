import { useRef, useState, useEffect } from 'react'
import './otpgenerator.css'
import axios from 'axios';
export default function Otpgenerator() {

    const [number, setNumber] = useState('');

    // function to take input from input field
    function handleOnChange(event) {
        setNumber(Number(event.target.value));
    }

    //trying to fetch api using fetch method;
    // async function sendData() {
    //     let mobileNumber = validateNumber(number)
    //     console.log(mobileNumber)
    //     const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
    //     const data = { mobile: 6764326882 };
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });
    //         const responseData = await response.json();
    //         console.log(responseData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     setNumber('')
    // }

    // api fetching 
    async function sendData() {

        let mobileNumber = validateNumber(number)
        const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
        const data = { mobile: mobileNumber };

        try {
            const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
            console.log(response.data);
            alert("otp send successfully");
            setNumber('')
        } catch (error) {
            alert("please wait for 2 minutes then try again or try some different number for otp");
        }
    }

    // validating phone number
    function validateNumber(input) {
        const regex = /^[1-9]{1}[0-9]{9}$/;
        let result = regex.test(input);
        if (result)
            return input;
        else
            return '';
    }

    return (
        <>
            <div className="alignments">
                <div className="content">
                    <div className="d-flex justify-content-center p-2"><h4>Otp Generator</h4></div>
                    <div className="d-flex justify-content-evenly">
                        <div>
                            <input type="text" value={number} className="form-control" placeholder="Enter Number to guess" onChange={handleOnChange} />
                        </div>
                        <div><button id="sadhakjdkad" className="btn btn-primary" onClick={sendData}>Get OTP</button ></div>
                    </div>
                </div>
            </div >
        </>
    )
}