import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/util/query";
import { useRouter } from "next/router";
import { StyledProductDetails } from "@/styles/productDetails";

import {
  AiFillMinusSquare,
  AiFillPlusSquare,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";

//shop context
import { useStateContext } from "@/util/context";

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

  const product = data.products.data[0].attributes;
  const { title, description, price, image } = product;
  const { qty, increaseQty, decreaseQty, addToCart } = useStateContext();
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
          <button>
            <AiFillPlusSquare onClick={increaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillMinusSquare onClick={decreaseQty} />
          </button>
        </div>
        <button onClick={() => addToCart(product, qty)} className="cart-btn">
          Add to cart
        </button>
      </div>
    </StyledProductDetails>
  );
}
