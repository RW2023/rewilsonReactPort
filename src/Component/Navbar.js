import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav-items no-bullets">
                    <li className="nav-item"><a href="#home" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#about " className="nav-link">ABOUT ME</a></li>
                    <li className="nav-item"><a href="#LINKS" className="nav-link">LINKS</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">MY WORK</a></li>
                </ul>
                <div className="menu-toggle">
                    <i className="bx bx-menu"></i>
                    <i className="bx bx-x"></i>
                </div>
            </nav>
        );
    }
}
export default Navbar;
