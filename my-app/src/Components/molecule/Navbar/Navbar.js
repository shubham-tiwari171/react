import React from 'react'
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    //const handleDashboardClick = (params) => {
    //     navigate(params)
    // }
    // const handleSignUpClick = (params) => {
    //     navigate(params)
    // }
    // const handleLoginClick = (params) => {
    //     navigate(params)
    // }
    const handleNavigateClick = (params) => {
        navigate(params)
    }
    return (
        <>

            <nav className="navbar navbar-dark" style={{ height: '90px', marginTop: "-13px" }}>
                <div className="navbar-container container " style={{ height: '40px' }}>
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li>
                            <a onClick={() => handleNavigateClick('/navbar')}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigateClick('/navbar')}>About</a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigateClick('/navbar')}>Category</a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigateClick('/login')}>Login</a>
                        </li>
                        <li>
                            <a onClick={() => handleNavigateClick('/signup')}>Sign up</a>
                        </li>
                    </ul>
                    <h1 className="logo" onClick={() => handleNavigateClick('/navbar')}>Quiz</h1>
                </div>
            </nav>
        </>
    )
}

export default Navbar