import React from 'react';
import "./page.scss"

const DeleteBlogPost: React.FC = () => {
  return (
    <div className="delete-blog-post-modal">
      <div className="delete-blog-post-modal__content">
        <div className="delete-blog-post-modal__header">
          <span className="delete-blog-post-modal__icon">!</span>
          <h3 className="delete-blog-post-modal__title">Delete blog post</h3>
        </div>
        <div className="delete-blog-post-modal__body">
          <p>Are you sure you want to delete this post? This action cannot be undone.</p>
        </div>
        <div className="delete-blog-post-modal__actions">
          <button className="delete-blog-post-modal__button delete-blog-post-modal__button--cancel">Cancel</button>
          <button className="delete-blog-post-modal__button delete-blog-post-modal__button--delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlogPost;