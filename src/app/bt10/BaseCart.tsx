// components/ProductCard.js
import React from 'react';
import "./BaseCart.scss"
const ProductCard = ({ title, description, imageUrl, children }:{title:string, description:string, imageUrl:string, children:React.ReactNode}) => {
    return (
      <div className="product-card">
        <img src={imageUrl} alt={title} className="product-card__image" />
        <div className="product-card__content">
          <h3 className="product-card__title">{title}</h3>
          <p className="product-card__description">{description}</p>
          {children}
        </div>
      </div>
    );
  };
  
  export default ProductCard;