"use client";

import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const NavigationClient = () => {
  return (
    <div className="flex items-center gap-7">
      <Link
        className="flex flex-col text-center items-center text-gray-800 rounded-md transition-all hover:bg-gray-200 p-2"
        href="/login"
      >
        <AiOutlineUser className="text-3xl" />
        <span>Mi cuenta</span>
      </Link>
      <Link
        href="/wishlist"
        className="flex items-center justify-center rounded-md hover:bg-gray-200 p-2 gap-3"
      >
        <AiOutlineHeart className="text-3xl text-gray-800" />
        <span>
          Lista de <br /> favoritos
        </span>
      </Link>
      <Link
        href="/cart"
        className="flex flex-col items-center justify-center  rounded-md hover:bg-gray-200 py-2 px-4"
      >
        <AiOutlineShoppingCart className="text-3xl text-gray-800" />
        <span>Carrito</span>
      </Link>
    </div>
  );
};

export default NavigationClient;
