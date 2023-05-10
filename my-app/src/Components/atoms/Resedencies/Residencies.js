import styles from "./Residencies.module.css";
import React from "react";
import Slider from "../../organisms/Slider/Slider";
import { slider } from './slider.js'
export default function Residencies() {
  console.log(slider);
  return (
    <section className={`${styles['r-wrapper']}`}>
      <div className={`padding innerWidth ${styles['r-container']}`}>
        <div className={`flexColStart${styles['r-head']}`}>
          <span className="orangeText">Best Choises</span><br />
          <span className="primaryText">Popular Residencies</span>
        </div>
      </div>
      <div>
        <Slider cardata={slider} />
      </div>

    </section>
  );
}
