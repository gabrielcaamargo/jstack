import React from "react";
import PropTypes from 'prop-types';

import PostHeader from "./PostHeader";

import { Subtitle, Rate } from "./styles";
export default function Post(props){
  return(
      <article>
        <PostHeader 
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate>Média: {props.post.likes / 2}</Rate>
      </article>  
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}

// INTRODUCING CONTEXT API WITH THEME SWITCHER EXAMPLE