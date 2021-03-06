import React from "react";
import { StyledNavBarLogo } from "../Style/Style";

function NavbarLogo() {
    return (
        <StyledNavBarLogo>
            <div className="wrapper">
                <svg viewBox="0 0 369.23 408.79">
                    <polygon
                        className="st0"
                        points="353.69,302.1 186.38,397.3 19.07,302.11 19.07,111.72 186.38,16.53 353.69,111.72 "
                    />
                    <polyline
                        className="st1"
                        points="187.69,398.04 19.07,302.11 19.07,111.72 187.6,15.83 "
                    />
                    <polyline
                        className="st1"
                        points="185.07,15.83 353.69,111.72 353.69,302.1 185.07,398.04 "
                    />
                    <polyline
                        className="st2"
                        points="173.58,94.51 89.52,304.4 56.55,199.45 "
                    />
                    <line
                        className="st3"
                        x1="238.98"
                        y1="93.41"
                        x2="154.91"
                        y2="303.3"
                    />
                    <polyline
                        className="st3"
                        points="201.9,311.86 285.96,101.97 283.07,311.86 "
                    />
                </svg>
            </div>
        </StyledNavBarLogo>
    );
}

export default NavbarLogo;
