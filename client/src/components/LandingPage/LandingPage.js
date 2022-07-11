import "./LandingPage.css"
import React from "react";
import { NavLink } from "react-router-dom";


const LandingPage = () => {
    return (
        <div className="landing">
            <NavLink to="/home" > <img className="logo" src="https://occ-0-2926-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRKcwNbC9wmX5ACYnBKA2c1dex017_UK5jyuKmNThKy0gzoD6nNZKfAObo9K4G2VDei6GBLyi6fxBPxEUYQeJleTYvxcVRlpIwo.webp?r=3ce" alt="to home"/> </NavLink>
        </div>
    )
}

export default LandingPage;