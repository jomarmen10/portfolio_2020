import React, { Component } from 'react';
import NavbarLogo from "./Components/NavbarLogo/NavbarLogo";
import Project from "./Components/Projects/Projects";
import Jmendoza from "./Components/Jmendoza/Jmendoza";
import SkillsAndContact from "./Components/SkillsAndContact/SkillsAndContact";
import { StyledHeader } from './Components/Style/Style';

class App extends Component {


    componentDidMount() {
        document.body.style.margin = "0";
    }

    render() {
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


    
}

export default App;
