import React, { useState } from 'react';
import './NavbarMobileView.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { PiStack } from 'react-icons/pi';
import { VscChecklist } from 'react-icons/vsc';
import { MdOutlineContactPage } from 'react-icons/md';
import { Link } from 'react-scroll';

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>
      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobile">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <GoHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsPerson size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <PiStack size={25} /> Tech Skills
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <VscChecklist size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdOutlineContactPage size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
