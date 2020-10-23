import React, { Component } from 'react';
import NavbarLogo from "./Components/NavbarLogo/NavbarLogo";
import Project from "./Components/Projects/Projects";
import Jmendoza from "./Components/Jmendoza/Jmendoza";
import SkillsAndContact from "./Components/SkillsAndContact/SkillsAndContact";
import Navbar from "./Components/Navbar/Navbar";
import { StyledHeader, StyledNavBar } from './Components/Style/Style';

class App extends Component {


    componentDidMount() {
        document.body.style.margin = "0";
        // document.addEventListener('scroll', this.handleScroll);
    }


    // for project YOffset = 900
    // for contact YOffset = 5193

    // handleScroll = () => {

    //     if(window.pageYOffset !== 0){
    //         // window.pageYOffset = 0;
    //     }
    //     console.log(window.pageYOffset)
    // }

    render() {
        return (
            <div>
                <Navbar/> 
                <StyledHeader>
                    <NavbarLogo />
                    <Jmendoza />
                </StyledHeader>
                <Project/>
                <SkillsAndContact/>
            </div>
        );
    }


    
}

export default App;
