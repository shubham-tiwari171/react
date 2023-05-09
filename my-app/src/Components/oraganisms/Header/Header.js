import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
export default function Header() {

    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <section className={`${styles['h-wrapper']}`}>
            <div className={`flexCenter innerWidth padding ${styles["h-container"]}`}>
                <div className={`d-flex justify-content-center ${isToggleOn ? 'flex-column' : ''}`}>
                    <span> <img src="./logo.png" alt="logo" width={100} /></span>

                    <div className={`flexCenter ${styles.menu} ${styles['h-gap']} ${isToggleOn ? 'flex-column' : ''}`}>
                        <a href="">Recidencies</a>
                        <a href="">Our values</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Login</a>
                        </button>
                    </div>
                </div>

                <div className={`styles.container ${isToggleOn ? styles.change : ''}`} onClick={handleClick}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </div>

        </section >
    );
}
