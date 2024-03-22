import React from 'react';
import './SidebarList.css';
import profilepic from '../../image/NN-profile.jpg';

import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { PiStack } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';

import { IoIosContact } from 'react-icons/io';
import { Link } from 'react-scroll';

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile" />
          </div>
          <ul>
            <li className="nav-item">
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

            <li className="nav-item">
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
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <PiStack size={25} /> Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdOutlineWorkOutline size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <IoIosContact size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <GoHome size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <BsPerson size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <PiStack size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdOutlineWorkOutline size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <IoIosContact size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
