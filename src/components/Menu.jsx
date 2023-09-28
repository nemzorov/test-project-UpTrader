import React from "react";
import './../assets/scss/components/Menu.scss'

const Menu = (props) => {
    return (
        <div className={`menu ${props.isOpen ? 'menu__active' : ''}`}></div>
    )
}

export default Menu;