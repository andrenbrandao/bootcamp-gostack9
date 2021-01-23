import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

function Post({ data }) {
  const {
    author: { avatar, name },
    content,
  } = data;

  return (
    <li className="comment-item">
      <div className="comment-container">
        <img src={avatar} alt="avatar" />
        <div className="comment-data">
          <strong>{name}</strong>
          <p className="comment-content">{content}</p>
        </div>
      </div>
    </li>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
