import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/home.css"

function Home() {
    return <div className="home">

        <div className="about">
            <h2>Hi, My Name is Gabriel</h2>
            <div className="prompt">
                <p>A Junior Front-End Developer with a passion for learning and creating.</p>
                <a
                    href="https://www.linkedin.com/in/gabriel-toncelli-18359b221/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <LinkedIn />
                </a>
                <a

                    href="https://www.google.com/intl/it/gmail/about/"
                    target="_blank"
                    rel="noopener noreferrer">

                    <Email />
                </a>
                <a
                    href="https://github.com/gabritonce"
                    target="_blank"
                    rel="noopener noreferrer">
                    <GitHub />
                </a>
            </div>

        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>Angular, HTML, CSS, SCSS, Bootstrap, MaterialUI,</span>
                </li>

                <li className="item">
                    <h2>Languages</h2>
                    <span>Javascript, Typescript</span>
                </li>

            </ol>
        </div>
    </div>
}
export default Home