import React from "react";
import { StyledNavBar } from "../Style/Style";

function NavbarLogo() {
    return (
        <StyledNavBar id="Home">
            <div className="navbar">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default NavbarLogo;
