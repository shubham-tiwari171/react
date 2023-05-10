import "./Companies.module.css";
import React from "react";
import styles from "./Companies.module.css";
export default function Companies() {
  return (
    <section className={`${styles['c-wrapper']}`}>
      <div className={`innerWidth padding flexCenter  ${styles['c-container']}`}>
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="realty.png" alt="" />
      </div>
    </section>
  );
}
