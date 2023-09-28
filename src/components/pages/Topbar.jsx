import React from "react";
import './../../assets/scss/components/Topbar.scss'
import Burger from "../common/Burger";

const Topbar = (props) => {
    return (
        <div className="topbar">
            <Burger isOpen={props.isOpen} />
        </div>
    )
}

export default Topbar;