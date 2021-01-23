import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

import './Post.css';

function Post({ data }) {
  const {
    author: { avatar, name },
    date,
    content,
    comments,
  } = data;

  return (
    <li className="post-item">
      <div className="author-info">
        <img src={avatar} alt="avatar" />
        <div className="post-data">
          <strong>{name}</strong>
          <small className="date">{date}</small>
        </div>
      </div>
      <p className="comment-content">{content}</p>
      <ul className="comment-list">
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};

export default Post;
