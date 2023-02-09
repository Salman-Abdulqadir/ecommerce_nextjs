import React from "react";
import { Wrapper, StyledCart, CartHeader, CartBody, EmptyCart } from "@/styles/cart_styles";
import { useStateContext } from "@/util/context";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const { cartItems, setShowCart, showCart } = useStateContext();
  console.log(cartItems);
  return (
    <Wrapper>
      <StyledCart>
        <CartHeader>
          <h1 className="flex">
            <AiOutlineShoppingCart />
            Cart
          </h1>
          <h1 className="close-cart" onClick={() => setShowCart(!showCart)}>
            <AiFillCloseCircle />
          </h1>
        </CartHeader>
        <CartBody>
          {cartItems?.length < 1 && <EmptyCart>You have nothing here </EmptyCart>}
          {cartItems.map(item => {
            return(
                <div className="flex">
                    <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                    <h2>{item.title}</h2>
                </div>
            )
          })}
        </CartBody>
      </StyledCart>
    </Wrapper>
  );
};

export default Cart;
