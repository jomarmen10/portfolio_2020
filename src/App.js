import React, { Component } from 'react';
import NavbarLogo from "./Components/NavbarLogo/NavbarLogo";
import Project from "./Components/Projects/Projects";
import Jmendoza from "./Components/Jmendoza/Jmendoza";
import SkillsAndContact from "./Components/SkillsAndContact/SkillsAndContact";
import Navbar from "./Components/Navbar/Navbar";
import { StyledHeader } from './Components/Style/Style';

class App extends Component {


    componentDidMount() {
        document.body.style.margin = "0";
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log('hello')
    }

    render() {
        return (
            <div>
                <Navbar />
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
