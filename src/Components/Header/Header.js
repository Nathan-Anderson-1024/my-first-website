import React from "react";
import './Header.css'

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo_container">
                        <a href="./index.html">
                            <img src={require("./Fun Fresno.png")} alt="logo of explore fresno" id="logo_img"></img>
                        </a>
                    </div>
                    <div className="child_right">
                        <a href="./index.html">Home</a>
                        <a href="./about.html">About</a>
                        <a href="./contact.html">Contact</a>
                    </div>
                </nav>
            </header>
        )
    }
}