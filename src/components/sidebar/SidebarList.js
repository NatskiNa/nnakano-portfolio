import React from 'react';
import './SidebarList.css';
import profilepic from '../../image/NN-profile.jpg';

import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { PiStack } from 'react-icons/pi';
import { VscChecklist } from 'react-icons/vsc';
import { MdOutlineContactPage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

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
              <GoHome size={25} /> Home
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="text-decoration-none text-black">
                <BsPerson size={25} /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="text-decoration-none text-black">
                <PiStack size={25} /> Tech Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="text-decoration-none text-black"
              >
                <VscChecklist size={25} /> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="text-decoration-none text-black"
              >
                <MdOutlineContactPage size={25} /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item" alt="home">
              <GoHome size={25} />
            </li>
            <li className="nav-item" alt="about">
              <NavLink to="/about" className="text-decoration-none text-black">
                <BsPerson size={25} />
              </NavLink>
            </li>
            <li className="nav-item" alt="skills">
              <NavLink to="/skills" className="text-decoration-none text-black">
                <PiStack size={25} />
              </NavLink>
            </li>
            <li className="nav-item" alt="projects">
              <NavLink
                to="/projects"
                className="text-decoration-none text-black"
              >
                <VscChecklist size={25} />
              </NavLink>
            </li>
            <li className="nav-item" alt="contact">
              <NavLink
                to="/contact"
                className="text-decoration-none text-black"
              >
                <MdOutlineContactPage size={25} />
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
