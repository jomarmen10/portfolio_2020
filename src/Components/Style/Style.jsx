import styled from "styled-components";

export const StyledNavBar = styled.div`
    .navbar {
        position: fixed;
        text-align: right;
        width: 100%;
        
        a {
            text-decoration: none !important;
            color: #000
        }

        ul {
            list-style-type: none;
        }

        li {
            // display: inline; 
            padding: 10px 20px 0 0;
        }

    }
`

export const StyledNavBarLogo = styled.div`
    display: flex;
    justify-content: center;
    padding: 150px 0 50px;

    .wrapper {
        width: 25vh;
    }

    polyline,
    line {
        stroke: #fff;
        fill: #fff;
        stroke-dasharray: 1800;
        opacity: 10;
        animation: animate 3s cubic-bezier(0, 0.23, 1, 0.1);
    }

    @keyframes animate {
        0% {
            opacity: 0;
            fill: none;
            stroke-dashoffset: 1800;
        }

        30% {
            opacity: 0;
            fill: none;
            stroke-dashoffset: 1800;
        }

        90% {
            fill: rgba(255, 255, 255, 0);
        }

        100% {
            opacity: 10;
            fill: rgba(255, 255, 255, 1);
            stroke-dashoffset: 0;
        }
    }

    .st0 {
        display: none;
        fill: none;
        stroke: #000000;
        stroke-width: 6;
        stroke-miterlimit: 10;
    }

    .st1 {
        fill: none;
        stroke: #000;
        stroke-width: 9;
        stroke-miterlimit: 10;
    }

    .st2 {
        fill: none;
        stroke: #000;
        stroke-width: 6;
        stroke-miterlimit: 10;
    }

    .st3 {
        fill: none;
        stroke: #000;
        stroke-width: 6;
        stroke-miterlimit: 10;
    }
`;

export const StyledJmendoza = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0 25%;

    .st0 {
        fill: none;
    }
    .st1 {
        fill: black;
        stroke: #000;
        stroke-width: 3;
        stroke-miterlimit: 10;
    }
    .wrapper {
        width: 35%;
    }

    path {
        stroke: #000;
        fill: #000;
        stroke-dasharray: 1900;
        opacity: 10;
        animation: animate 3s cubic-bezier(0, 0.23, 1, 0.1);
    }

    @keyframes animate {
        0% {
            opacity: 0;
            fill: none;
            stroke-dashoffset: 1900;
        }

        30% {
            opacity: 0;
            fill: none;
            stroke-dashoffset: 1900;
        }

        90% {
            fill: rgba(255, 255, 255, 0);
        }

        100% {
            opacity: 10;
            stroke-dashoffset: 0;
        }
    }
`;

export const StyledProject = styled.div`
    text-align: center;

    img {
        width: 40%;
    }

    button {
        color: white;
        margin: 10px;
        padding: 15px;
        text-align: center;
        border-style: solid;
        border-radius: 25px;
        border-color: #999;
        background-color: #555;

    }

    button:hover {
        background-color: #999;
        border-color: #000;
        cursor: pointer;
        color: black;
    }

    .no-click {
        color: white !important;
        cursor: default !important;
        background: #555 !important;
        border-color: #999 !important;
    }
    
    .projects {
        padding: 50px;

        p {
            padding: 0 28%;
        }
    }

    .line-div {
        margin-top: 40px;
        width: 80%;
        border: 2px black solid;
        margin-left: auto;
        margin-right: auto;
    }

    // --------------Responsive design start--------------

    @media (max-device-width:374px) 

    }

    @media (max-device-width:640px) {
        Width: 100%
    }
`;


export const StyledHeader = styled.div`
    background-image: linear-gradient(#555, #999, white);
`

export const StyledSkillAndContact = styled.div`
    background-image: linear-gradient(white, #999, #555);
    padding: 50px 0 75px;
    text-align: center;
    
    .skill-div {
        text-transform:uppercase;
        
        p {
            padding: 0 28%;
        }
    }

    .contact-div {
        margin: 100px 0;
        display: flex;
        justify-content: center;
        position: relative
        h4 {
            margin: 0;
        }

        a {
            color: #555;
        }
    
    }

    .contact-cards {
        border-radius: 25px;
        width: 330px;
        height: 180px;
        background-color: white;
        margin: 0 10px;
        position: relative;
    }

    .inner-container {
        padding-top: 8%;
    }

    // --------------Responsive design start--------------

    @media (max-device-width:764px) {
        .contact-cards {
            width: 270px;
            height: 180px;
        }
    }
`