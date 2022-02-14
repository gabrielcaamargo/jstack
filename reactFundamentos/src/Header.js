import React from "react";
import propTypes from "prop-types";


export default function Header (props){
  return(
    <>
        <h1>{props.title}</h1>
        {props.children}
    </>
  )
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired
}

Header.defaultProps = {
  title: `JStack's Blog`,
}