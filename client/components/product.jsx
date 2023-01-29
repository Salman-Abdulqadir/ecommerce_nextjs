import React from "react";

const Product = ({ product }) => {
    const { title, description, image } = product.attributes;
    console.log(description);
  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h2>{description}</h2>
    </div>
  );
};

export default Product;
