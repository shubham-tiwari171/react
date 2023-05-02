import "./Profilecard.css"
import { useRef, useState } from "react";

function Profilecard(props) {

    const profileData = props.profileInfo.data;

    console.log(profileData.data)

    function handleClick() {
        props.profileInfo.onclick();
    }

    if (profileData.length === 0) {

        return (
            <div className="d-flex justify-content-center align-items-center mt-3">
                <button className={`btn btn-success`} onClick={handleClick}>Fetch data</button>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex flex-wrap">
                {
                    profileData.data.map(
                        (item, index) => (

                            <div className="card-background" key={item.id}>
                                <div className="content">
                                    <div className="left-side">
                                        <div className="card-description">
                                            <h2 className="card-description-title">{`${item.first_name} ${item.last_name}`}</h2>
                                            <span className="card-description-profession">{item.email}</span>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </>
    )
}
export default Profilecard;