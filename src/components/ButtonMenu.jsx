"use client";

import { AiOutlineMenu } from "react-icons/ai";
import HoverableDropdown from "./HoverableDropdown";

const ButtonMenu = () => {
  return (
    <>
      <HoverableDropdown
        dimensionNumber={[0.8, 0.6]}
        parentDom={
          <button className="flex items-center gap-2 relative p-5 hover:bg-gray-200 rounded-xl">
            <AiOutlineMenu className="text-xl text-gray-900" />
            <span className="font-bold">Categorias</span>
          </button>
        }
      >
        <ul className="flex flex-col gap-4 text-md text-gray-800">
          <li className="text-2xl text-gray-900 font-bold">Tecnologia</li>
          <li className="">
            <a href="#">Celulares</a>
          </li>
          <li>
            <a href="#">Audifonos</a>
          </li>
        </ul>
      </HoverableDropdown>
    </>
  );
};

export default ButtonMenu;
