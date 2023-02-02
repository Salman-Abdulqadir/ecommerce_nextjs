import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    <div>
      <Link href={"/"}>Shop</Link>
      <FiShoppingBag />
    </div>
  );
};

export default Nav;
