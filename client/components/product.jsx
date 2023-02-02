import React from "react";
import { StyledProduct } from "@/styles/product_styles";
import Link from "next/link";

const Product = ({ product }) => {
    const { title, price, image, slug } = product.attributes;
  return (
    <StyledProduct>
      <Link href={`/product/${slug}`} className="image">
        <img src={image.data.attributes.formats.small?.url} alt="" />
      </Link>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </StyledProduct>
  );
};

export default Product;
