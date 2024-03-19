import React, { useState } from 'react';
import './Sidebar.css';
import Home from '../home/Home';
import SidebarList from './SidebarList';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? 'sidebar-expand sidebar' : 'sidebar'}>
        <div className="sidebar-expand-chevron">
          <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <FaChevronLeft size={28} />
            ) : (
              <FaChevronRight size={28} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
