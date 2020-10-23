/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { StyledProject } from "../Style/Style";

function Project() {
    return (
        <StyledProject>
            <div id="container">
                {/* Featured project  */}
                <div id='main' className="projects">
                    <div>
                        <img src="img/SuperMario.png" alt="Super Mario"/>
                    </div>
                    <div>
                        <h4>Super Mario Bros</h4>
                        <p>Technologies Used: HTML | CSS | JAVASCRIPT</p>
                        
                        <a href="https://jomarmen10.github.io/firstProject/" target="_blank" rel="noopener noreferrer">
                            <button>Live Demo</button>
                        </a>
                    
                        <a href="https://github.com/jomarmen10/firstProject" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>

                <div className="projects">
                    <div>
                        <img src="img/code-buddy.png" alt="CodeBuddy Demo"/>
                    </div>
                    <div>
                        <h4>Code Buddy</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | SOCKET.IO | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | ACE | HEROKU </p>
                        
                        <a href="https://code-bud.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button>Live Demo</button>
                        </a>
                    
                        <a href="https://github.com/jomarmen10/final-project" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>

                <div className="projects">
                    <div>
                        <img src="img/real.png" alt="Real Estate Demo"/>
                    </div>
                    <div>
                        <h4>Real Estate</h4>
                        <p>Technologies Used: HTML | CSS | JAVASCRIPT | API | JSX | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | EXPRESS-SESSION | BCRYPT | MATERIALIZE CSS | HEROKU</p>
                        
                        <a href="https://evening-cove-84378.herokuapp.com/houses" target="_blank" rel="noopener noreferrer">
                            <button>Live Demo</button>
                        </a>
                    
                        <a href="https://github.com/jomarmen10/git-flow1" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>

                <div className="projects">
                    <div>
                        <img src="img/inta.png" alt="InstaClone Demo"/>
                    </div>
                    <div>
                        <h4>Instagram Clone</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | API | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | EXPRESS-SESSION | BCRYPT | CORS | HEROKU</p>
                        
                        <a href="https://instalkerr.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button>Live Demo</button>
                        </a>
                    
                        <a href="https://github.com/jomarmen10/project-react" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>

                <div className="projects">
                    <div>
                        <img src="img/happy.png" alt="HappyHour Demo"/>
                    </div>
                    <div>
                        <h4>Happy Hour</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | PYTHON3 | FLASK | LITESQL | SQL | POSTGRES | CORS | HEROKU | STYLE COMPONENT | REACT MATERIALIZE</p>
                        
                        <a>
                            <button className="no-click">Live Demo(unavailable)</button>
                        </a>
                                       
                        <a href="https://github.com/jomarmen10/mini-project-react" target="_blank" rel="noopener noreferrer">
                            <button>Frontend</button>
                        </a>
                    
                    
                        <a href="https://github.com/jomarmen10/project-4-backend" target="_blank" rel="noopener noreferrer">
                            <button>Backend</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>

                <div className="projects">
                    <div>
                        <img src="img/trace.png" alt="Trace Demo"/>
                    </div>
                    <div>
                        <h4>Trace</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | NODE.JS | EXPRESS | NODE.JS | MONGODB | MONGOOSE | BCRYPT | API</p>

                        <a>
                            <button className="no-click">Live Demo(unavailable)</button>
                        </a>
                        
                        <a href="https://github.com/jomarmen10/dtla" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                        
                    </div>
                    <div className="line-div"></div>
                </div>
            </div>
        </StyledProject>
    );
}

export default Project;
