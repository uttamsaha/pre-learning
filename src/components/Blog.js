// components/Blog.js

import React from 'react';

const Blog = ({ category, posts }) => {
  const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);

  return (
    <div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
