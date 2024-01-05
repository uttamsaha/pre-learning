// pages/index.js
"use client"
import CategoryMenu from '@/components/CategoryMenu'
import Blog from '@/components/Blog'
import React, { useState } from 'react';
const posts = [
  { id: 1, title: 'Post 1', category: 'category1' },
  { id: 2, title: 'Post 2', category: 'category2' },
  { id: 3, title: 'Post 3', category: 'category1' },
  // Add more sample data as needed
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoryMenu
        categories={['all', 'category1', 'category2']} // Add your actual categories
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Blog category={selectedCategory} posts={posts} />
    </div>
  );
};

export default HomePage;
