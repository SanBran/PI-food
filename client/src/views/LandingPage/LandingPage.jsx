import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import video from "../../sources/LandingVideo.mp4"
import landing from "../../sources/landing.png"

export default function LandingPage () {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.start} src={landing} alt="landing" />
            </div>
            <Link to="/home"> 
                <button>START</button>
            </Link>
            
            <div className="video">
                <video src={video} autoPlay muted loop />
            </div>
        </div>
    )
}
