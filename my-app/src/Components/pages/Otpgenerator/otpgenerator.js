import { useRef, useState, useEffect } from 'react'
import './otpgenerator.css'
import axios from 'axios';
export default function Otpgenerator() {

    const [number, setNumber] = useState('');

    // function to take input from input field
    function handleOnChange(event) {
        setNumber(Number(event.target.value));
    }

    // api calling 
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
            if (mobileNumber.toString().length < 10)
                alert("invalid mobile number");
            if (mobileNumber.toString().length > 10)
                alert("invalid mobile number");
        }
    }

    // validating phone number
    function validateNumber(input) {
        const regex = /^[6-9]\d{9}$/;
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
                    <div className="d-flex justify-content-center p-2"><h4>Generate Otp</h4></div>
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