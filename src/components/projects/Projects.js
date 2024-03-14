import React from 'react';
import './Projects.css';

const Projects = () => {
  const data = [
    {
      name: 'Premier League Fan Site',
      description: '3 pages soccer fan site with JS game (group project)',
      projectLink: 'https://github.com/NatskiNa/PL_fanSite',
      techUsed: [
        {
          techName: 'JavaScript',
        },
        {
          techName: 'HTML',
        },
        {
          techName: 'CSS',
        },
        {
          techName: 'Bootstrap',
        },
      ],
    },
    {
      name: 'Task Manager',
      description: 'cloud app where users can track tasks',
      projectLink:
        'https://simple-task-manager-2vgosb0u1-natskinas-projects.vercel.app/',
      techUsed: [
        {
          techName: 'ReactJS',
        },
        {
          techName: 'HTML',
        },
        {
          techName: 'CSS',
        },
      ],
    },
    {
      name: 'NodeJS Reminder',
      description: 'simple task reminder app',
      projectLink: 'https://github.com/NatskiNa/reminder-Nodejs',
      techUsed: [
        {
          techName: 'React Native',
        },
        {
          techName: 'TypeScript',
        },
        {
          techName: 'google firebase',
        },
      ],
    },
    {
      name: 'Memo App',
      description: 'simple memo app for iOS and Android ',
      projectLink: 'https://github.com/NatskiNa/MemoApp',
      techUsed: [
        {
          techName: 'ReactJS',
        },
        {
          techName: 'Node.js',
        },
        {
          techName: 'MongoDB',
        },
        {
          techName: 'Mongoose',
        },
      ],
    },
  ];

  return (
    <div className="col py-3 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div className="projects">
              <h2 className="slide-in-top">Projects</h2>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
