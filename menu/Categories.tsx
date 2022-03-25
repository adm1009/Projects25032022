import React from 'react';

const Categories = ({ categories, filterItems }:any) => {
  return (
    <div >
      {categories.map((category:any, index:any) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;