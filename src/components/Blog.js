// components/Blog.js

import React from 'react';

const Blog = ({ category, posts }) => {
  const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);

  return (
    <div>
      <h1>{category === 'all' ? 'All Posts' : `Posts in ${category} Category`}</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
