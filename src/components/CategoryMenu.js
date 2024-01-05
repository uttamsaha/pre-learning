// components/CategoryMenu.js

const CategoryMenu = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
      <div className="flex w-[210px] relative">
        {categories.map((category) => (
          <span
            key={category}
            className={` px-4 border-b-2  cursor-pointer ${
              category === selectedCategory ? 'border-b-2 border-orange-500' : ''
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
  