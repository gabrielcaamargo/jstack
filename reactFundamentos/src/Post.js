import React from "react";
import propTypes from "prop-types";

export default function Post (props) {

  return (
    <>
      <article>
        <strong>
          {props.post.read && <s>{props.post.title}</s>}
          {!props.post.read && props.post.title}
        </strong> <br />
        <small>{props.post.subtitle}</small>
        <br />
         Media: {props.post.likes / 2}
        </article>
        <br />
    </>
  )
}

Post.propTypes = {
  
  post: propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    likes: propTypes.number.isRequired, 
    read: propTypes.bool.isRequired, 
  }).isRequired,
}