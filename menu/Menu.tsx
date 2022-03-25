import React from 'react';

const Menu = ({ items }:any) => {
  return (
    <div>
      {items.map((menuItem:any) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <div>
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;