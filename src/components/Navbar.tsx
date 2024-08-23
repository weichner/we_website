import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [listOfRoutes, setListOfRoutes] = useState<string[]>([]);
  const [click, setClick] = useState<boolean>(false);
  const [headerColor, setHeaderColor] = useState<boolean>(false);

  useEffect(() => {
    setListOfRoutes(['home', 'about', 'project', 'contact']);
  }, []);

  const handleClick = () => setClick(!click);

  const handleColorChange = () => {
    if (window.scrollY >= 100) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener('scroll', handleColorChange);

  return (
    <div className={headerColor ? 'header header-bg' : 'header'}>
      <Link to={'/'}>Portfolio</Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {listOfRoutes.map((route) => {
          const path = route === 'home' ? '/' : `/${route}`;
          return (
            <li key={route}>
              <Link to={path}>{route}</Link>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
