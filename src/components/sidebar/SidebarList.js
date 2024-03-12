import React from 'react';
import './SidebarList.css';
import profilepic from '../../image/NN-profile.jpg';

import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { PiStack } from 'react-icons/pi';
import { VscChecklist } from 'react-icons/vsc';
import { MdOutlineContactPage } from 'react-icons/md';

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
              <BsPerson size={25} /> About
            </li>
            <li className="nav-item">
              <PiStack size={25} /> Tech Stack
            </li>
            <li className="nav-item">
              <VscChecklist size={25} /> Projects
            </li>
            <li className="nav-item">
              <MdOutlineContactPage size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          <ul>
            <li className="nav-item">
              <GoHome size={25} />
            </li>
            <li className="nav-item">
              <BsPerson size={25} />
            </li>
            <li className="nav-item">
              <PiStack size={25} />
            </li>
            <li className="nav-item">
              <VscChecklist size={25} />
            </li>
            <li className="nav-item">
              <MdOutlineContactPage size={25} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
