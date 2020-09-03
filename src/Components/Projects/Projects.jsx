import React from "react";
import { StyledProject } from "../Style/Style";

function Project() {
    return (
        <StyledProject>
            <div>
                {/* Featured project  */}
                <div id='main'>
                    <div>
                        <img src="img/SuperMario.png" alt="Super Mario"/>
                    </div>
                    <div>
                        <h4>Super Mario Bros</h4>
                        <p>Technologies Used: HTML | CSS | JAVASCRIPT</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="img/code-buddy.png" alt="CodeBuddy Demo"/>
                    </div>
                    <div>
                        <h4>Code Buddy</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | SOCKET.IO | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | ACE | HEROKU </p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="img/real.png" alt="Real Estate Demo"/>
                    </div>
                    <div>
                        <h4>Real Estate</h4>
                        <p>Technologies Used: HTML | CSS | JAVASCRIPT | API | JSX | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | EXPRESS-SESSION | BCRYPT | MATERIALIZE CSS | HEROKU</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="img/inta.png" alt="InstaClone Demo"/>
                    </div>
                    <div>
                        <h4>Instagram Clone</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | API | EXPRESS.JS | NODE.JS | MONGODB | MONGOOSE | EXPRESS-SESSION | BCRYPT | CORS | HEROKU</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="img/happy.png" alt="HappyHour Demo"/>
                    </div>
                    <div>
                        <h4>Happy Hour</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | PYTHON3 | FLASK | LITESQL | SQL | POSTGRES | CORS | HEROKU | STYLE COMPONENT | REACT MATERIALIZE</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="img/trace.png" alt="Trace Demo"/>
                    </div>
                    <div>
                        <h4>Trace</h4>
                        <p>Technologies Used: REACT.JS | JAVASCRIPT | NODE.JS | EXPRESS | NODE.JS | MONGODB | MONGOOSE | BCRYPT | API</p>
                    </div>
                </div>
            </div>
        </StyledProject>
    );
}

export default Project;
