import React from "react";
import { Nav } from "../nav/nav";
import './header.scss'
import '../../style.scss';

export const Header = (props) => {

  return (
    <header className="header">
    <div className="container-fluid">

    <Nav pages={props.pages}/>

        <div className="header-wrap">
            <h1 className="header-title">
                Everything You Love About Coffee
            </h1>
            <div className="header-subimage">
                <img src="img/coffe_white.svg" alt=""/>
            </div>
            <p className="header-descr">
                We makes every day full of energy and taste
                Want to try our beans?
            </p>
            <a href="https://gog.com" className="btn header-btn">More</a>
        </div>
    </div>


</header>
  )
}