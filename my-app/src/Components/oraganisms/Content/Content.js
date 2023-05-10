import React from 'react'
import styles from "./Content.module.css";
import { HiLocationMarker } from "react-icons/hi";
export default function Content() {
    return (
        <section className={`${styles['hero-wrapper']}`}>
            <div className={`padding innerWidth flexCenter ${styles['hero-container']}`}>
                {/* left side */}

                <div className={`flexColStart ${styles['hero-left']}`}>
                    <div className={` ${styles["hero-title"]}`}>
                        <h1>
                            Discover <br />
                            Most Suitable <br /> Property
                        </h1>
                    </div>

                    <div className={`flexColStart ${styles["hero-des"]}`}>
                        <span>Find a veriety of property that suit you very eaisly</span>
                        <span>Forget all defficulties in finding a residence for you</span>
                    </div>

                    <div className={`flexCenter ${styles["search-bar"]}`}>
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" name="" id="" />
                        <button className="button">Search</button>
                    </div>

                </div>

                {/* right side */}
                <div className={`flexCenter ${styles['hero-right']}`}>
                    <div className={`${styles["image-container"]}`}>
                        <img src="./home.jpg" alt="hero image" />
                    </div>
                </div>
            </div>
        </section >
    );
}