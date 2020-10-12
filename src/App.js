import React from "react";
import NavbarLogo from "./Components/NavbarLogo/NavbarLogo";
import Project from "./Components/Projects/Projects";
import Jmendoza from "./Components/Jmendoza/Jmendoza";
import SkillsAndContact from "./Components/SkillsAndContact/SkillsAndContact";
import { StyledHeader } from './Components/Style/Style';

function App() {
    return (
        <div>
            <StyledHeader>
                <NavbarLogo />
                <Jmendoza />
            </StyledHeader>
            <Project />
            <SkillsAndContact />
        </div>
    );
}

export default App;
