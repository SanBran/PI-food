import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage () {
    return (
        <div>
            <h1>PI Foods 2023</h1>

             <Link to="/home"> 
                <button>START</button>
            </Link> 
        </div>
    )
}
