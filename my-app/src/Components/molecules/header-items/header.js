import "./header.css";
import { MdClear, MdDensityMedium } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 900) {
        setToggle(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav>
        <div className="container-fluid nav-bacground d-flex justify-content-space-between g-5">
          <div className="left">
            <img src="./logo192.png" alt="" />
          </div>
          <div
            className={`d-flex justify-content-center align-items-center 
            ${toggle ? "flexColoum" : ""}`}
          >
            {/*toggle the icon*/}
            <div className="hamburger" onClick={handleToggle}>
              <span className="d-flex justify-content-center align-items-center">
                {toggle ? <MdClear size={25} /> : <MdDensityMedium size={25} />}
              </span>
            </div>

            <div
              className={`d-flex justify-content-center align-items-center 
              ${toggle ? "flexColoum" : "right"}  gap-3`}
            >
              <Link to="/home" className="menu-items">Home</Link>
              <Link to="/about" className="menu-items">About Us</Link>
              <Link to='/services' className="menu-items">Services</Link>
              <Link to="/terms" className="menu-items">Terms</Link>
              <Link to="/contact" className="menu-items">Contact Us</Link>
              <button className="button"><Link to='/login'>Login</Link></button>
            </div>
          </div>
        </div>
      </nav>
      {/* {windowWidth} */}
    </>
  );
}
export default Header;
