import React from 'react';
import ProjectList from './ProjectList';
import './Projects.css';

const Projects = () => {
  const data = [
    {
      name: 'Premier League Fan Site',
      description:
        '3 pages soccer fan site with JavaScript game (group project)',
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
      projectLink: 'https://github.com/NatskiNa/simple-task-manager',
      liveLink:
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
      name: 'Memo App',
      description: 'simple memo app for iOS and Android ',
      projectLink: 'https://github.com/NatskiNa/MemoApp',
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
      name: 'NodeJS Reminder',
      description: 'simple task reminder app',
      projectLink: 'https://github.com/NatskiNa/reminder-Nodejs',
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
    {
      name: 'Xmas Treats Shopping',
      description: 'Christmas treats shopping cart',
      projectLink: 'https://github.com/NatskiNa/christmas-treats-redux',
      techUsed: [
        {
          techName: 'ReactJS',
        },
        {
          techName: 'React Redux',
        },
        {
          techName: 'CSS',
        },
        {
          techName: 'HTML',
        },
      ],
    },
  ];

  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <hr></hr>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
