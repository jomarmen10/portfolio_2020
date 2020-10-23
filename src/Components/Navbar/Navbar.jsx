import React from "react";
import { StyledNavBar } from "../Style/Style";

function NavbarLogo() {
    return (
        <StyledNavBar>
            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default NavbarLogo;
