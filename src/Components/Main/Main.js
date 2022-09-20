import React from "react";
import './Main.css'
export const Main = () => {
   return (
    <main>
        <div className="opener_container">
            <a href="https://www.google.com/search?q=shuteye+peak&client=firefox-b-1-d&sxsrf=ALiCzsat9XQjNM5rQuJUCQI0ScS5hcy3fg:1655775091873&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjd_rbxsr34AhVKDkQIHZx9B9kQ_AUoAnoECAIQBA&biw=2347&bih=1180&dpr=1.09" target="_blank" rel="noreferrer">
                <img src={require("./background_main_cropped_v2.jpg")} alt="shuteye peak"></img>
            </a>
        </div>
        <div className="opener_child">
            <h1>Welcome to ExploreFresno</h1>
            <h2>FresNO? More like FresYes!</h2>
        </div>
    </main>
   ) 
}