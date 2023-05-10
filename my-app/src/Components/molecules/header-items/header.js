import "./header.css";
import { MdClear, MdDensityMedium } from "react-icons/md";
import { useState, useEffect } from "react";

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
  }, [toggle]);

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
              <div className="menu-items">Home</div>
              <div className="menu-items">About Us</div>
              <div className="menu-items">Services</div>
              <div className="menu-items">Terms</div>
              <div className="menu-items">Contact Us</div>
              <button className="button">Login</button>
            </div>
          </div>
        </div>
      </nav>
      {/* {windowWidth} */}
    </>
  );
}
export default Header;
