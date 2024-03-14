import React from 'react';
import './Skills.css';
import {
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiCss3,
  SiNodedotjs,
  SiMongoose,
  SiMongodb,
  SiExpress,
  SiAdobeillustrator,
} from 'react-icons/si';

const Skills = () => {
  return (
    <>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div className="skills">
                <h2 className="slide-in-top">Technologies I know</h2>
                <hr></hr>
                <div className="row my-2">
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiHtml5 className="fs-4" /> HTML
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiBootstrap className="fs-4" /> Bootstrap
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiJavascript className="fs-4" /> Javascript
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiReact className="fs-4" /> React
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiRedux className="fs-4" /> React Redux
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiCss3 className="fs-4" /> CSS
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiNodedotjs className="fs-4" /> Node.js
                    </span>
                  </div>

                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiMongodb className="fs-4" /> MongoDB
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiMongoose className="fs-4" /> Mongoose
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiExpress className="fs-4" /> Express
                    </span>
                  </div>
                  <div className="mx-2 my-2 border rounded py-2 px-2 mw-fc">
                    <span>
                      <SiAdobeillustrator className="fs-4" /> Adobe Illustrator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
