// components/CategoryMenu.js

const CategoryMenu = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
      <div className="flex">
        {categories.map((category) => (
          <span
            key={category}
            className={`mx-2 cursor-pointer ${
              category === selectedCategory ? 'underline' : ''
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </span>
        ))}
      </div>
    );
  };
  
  export default CategoryMenu;
  