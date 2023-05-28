import React from 'react'
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigation = useNavigate()
    const location = useLocation()
    //const handleDashboardClick = (params) => {
    //     navigation(params)
    // }
    // const handleSignUpClick = (params) => {
    //     navigation(params)
    // }
    // const handleLoginClick = (params) => {
    //     navigation(params)
    // }
    const handleNavigateClick = (params) => {
        navigation(params)
    }
    return (
        <nav className="navbar navbar-dark">
            <div className="navbar-container container ">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li>
                        <a >Home</a>
                    </li>
                    <li>
                        <a >About</a>
                    </li>
                    <li>
                        <a >Category</a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigateClick('/login')}>Login</a>
                    </li>
                    <li>
                        <a onClick={() => handleNavigateClick('/signup')}>Sign up</a>
                    </li>
                </ul>
                <h1 className="logo">Quiz</h1>
            </div>
        </nav>
    )
}

export default Navbar