import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsActive(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/"><img src="/Images/logo-header.png" alt="Logo" /></a>
            </div>
            <ul className={`nav-links ${isActive ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}>
                <li><a href="/" onClick={() => isMobile && setIsActive(false)}>Home</a></li>
                <li><a href="/About" onClick={() => isMobile && setIsActive(false)}>About</a></li>
                <li><a href="/Articles" onClick={() => isMobile && setIsActive(false)}>Articles</a></li>
            </ul>
            {isMobile && (
                <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </nav>
    );
}

export default Header;
