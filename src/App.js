import React from "react";
import NavbarLogo from "./Components/NavbarLogo/NavbarLogo";
import Project from "./Components/Projects/Projects";
import Jmendoza from "./Components/Jmendoza/Jmendoza";
import SkillsAndContact from "./Components/SkillsAndContact/SkillsAndContact";

function App() {
    return (
        <div>
            <NavbarLogo />
            <Jmendoza />
            <Project />
            <SkillsAndContact />
        </div>
    );
}

export default App;
