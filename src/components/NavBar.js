import React, { useEffect, useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import storageService from '../services/storageService'
import { WeatherContext } from '../contexts/WeatherContext'

export default function NavBar() {
    const [btnStatus, setBtnStatus] = useState(false);
    const { degreesunits, dispatch } = useContext(WeatherContext)

    function toggleTheme() {
        let status = !btnStatus;
        setBtnStatus(status);
        document.documentElement.setAttribute(
            "data-theme",
            btnStatus ? "light" : "dark"
        );
        storageService._save("theme", btnStatus ? "light" : "dark");
    }

    function toggleDegrees() {
        let unit;
        if (degreesunits === 'F') {
            unit = 'C'
        } else {
            unit = 'F'
        }
        dispatch({ type: 'SET_UNITS', unit })

    }

    function loadUserPerf() {
        let userPref =
            document.documentElement.getAttribute("data-theme") === "dark";
        setBtnStatus(userPref);
    }

    useEffect(() => {
        loadUserPerf();
    }, []);


    return (
        <div className="nav-bar flex align-center ">
            <div className="link-wrapper flex align-center space-between">
                <div>
                    <NavLink activeClassName="selected" to="/Coral-Solomon-22-10-2020" exact >Home</NavLink>
                    <NavLink activeClassName="selected" to="/Coral-Solomon-22-10-2020/favorites" exact > Favorites</NavLink>

                </div>

                <div>
                    <label
                        id="theme-switch"
                        className="theme-switch"
                        htmlFor="checkbox_theme">
                        <input
                            onChange={toggleTheme}
                            type="checkbox"
                            id="checkbox_theme"
                            checked={btnStatus}/>
                    </label>


                    <label
                        id="degrees-switch"
                        className="degrees-switch"
                        htmlFor="checkbox_degrees">
                        <input
                            onChange={toggleDegrees}
                            type="checkbox"
                            id="checkbox_degrees"/>
                    </label>
                </div>
            </div>
        </div>
    )
}
