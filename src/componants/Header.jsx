import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/"><img src="/Images/logo-header.png" alt="Logo" /></Link>
            </div>
            <ul className={`nav-links ${isActive ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}>
                <li><Link to="/" onClick={() => isMobile && setIsActive(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => isMobile && setIsActive(false)}>About</Link></li>
                <li><Link to="/articles" onClick={() => isMobile && setIsActive(false)}>Articles</Link></li>
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
