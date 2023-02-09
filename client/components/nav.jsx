import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

//context
import { useStateContext } from "@/util/context";

//styles
import { StyledNav } from "@/styles/nav_styles";

const Nav = () => {
  const { setShowCart, showCart } = useStateContext();
  return (
    <StyledNav>
      <Link className="link" href={"/"}>Shop</Link>
      <h1 onClick={() => setShowCart(!showCart)}>
        <FiShoppingBag />
      </h1>
    </StyledNav>
  );
};

export default Nav;
