import React from "react";
import { StyledSkillAndContact } from "../Style/Style";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';


function SkillsAndContact() {
    return(
        <StyledSkillAndContact>
            <IconContext.Provider value={{ color: "#555", size: '2em'}}>
                {/* skills */}
                <div className='skill-div'>
                    <h2>Skills</h2>
                    <p>HTML | CSS | React | Javascript | Python3 | WordPress | SQL | NoSQL | Node.js | Express | MongoDB | Mongoose | Flask | Jquery | Postgres | SQLite | Socket.io | MERN | MVC | Git | Github | Heroku | Jinja | Materialize | CSSBootstrap | CSSStyled Components</p>
                </div>

                {/* contact */}
                <div className="contact-div">
                    <div className="contact-cards">
                    <FaGithub />
                        <h4>Github</h4>
                        <a href="https://github.com/jomarmen10" target="_blank" rel="noopener noreferrer">https://github.com/jomarmen10</a>
                    </div>
                    <div className="contact-cards">
                    <FaEnvelope />
                        <h4>Email</h4>
                        <a href="mailto:mendoza.jomar910@gmail.com">mendoza.jomar910@gmail.com</a>
                    </div>
                    <div className="contact-cards">
                    <FaLinkedin />
                        <h4>Linkedin</h4>
                        <a href="https://www.linkedin.com/in/jomar-mendoza" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jomar-mendoza</a>
                    </div>
                    
                </div>

            </IconContext.Provider>
        </StyledSkillAndContact>
    )
}

export default SkillsAndContact;