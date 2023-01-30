import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/util/query";
import { useRouter } from "next/router";
import { StyledProductDetails } from "@/styles/productDetails";

import {AiFillMinusSquare, AiFillPlusSquare, AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai'
export default function ProductDetails() {
  const { query } = useRouter();
  //fetch graphql data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = result;

  if (fetching) return <h1>Loading...</h1>;
  if (error) return <h1>Oh no... {error.message}</h1>;

  const { title, description, price, image } = data.products.data[0].attributes;
  return (
    <StyledProductDetails>
      <img src={image.data.attributes.formats.medium?.url} alt="" />
      <div className="details">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="quantity">
          <span>Quantity:</span>
          <button><AiFillPlusSquare/></button>
          <p>0</p>
          <button><AiFillMinusSquare></AiFillMinusSquare></button>
        </div>
        <button className="cart-btn">Add to cart</button>
      </div>
    </StyledProductDetails>
  );
}
