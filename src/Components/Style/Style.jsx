import styled from "styled-components";

export const StyledNavBar = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;

    .wrapper {
        width: 45vh;
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
        stroke-width: 7;
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
    padding: 50px 0;

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
        width: 50%;
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
