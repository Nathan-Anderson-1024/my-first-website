import React from "react";
import './Header.css'

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo_container">
                        <a href="./index.html">
                            <img src="./Fun Fresno.png" alt="logo of explore fresno"></img>
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