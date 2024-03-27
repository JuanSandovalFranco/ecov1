import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import logo from "assets/logo.png";
import ButtonMenu from "components/ButtonMenu";
import NavigationClient from "components/NavigationClient";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-around px-10 py-10">
      <div className="flex items-center">
        <ButtonMenu />
        <Link href="/hola" className="p-3">
          <Image src={logo} alt="logo tuganga" width="150"></Image>
        </Link>
      </div>

      <div className="w-5/12 relative">
        <input
          type="search"
          className="w-full shadow-sm border border-gray-100 py-3 px-8 rounded-xl"
          placeholder="Que vas a comprar hoy?"
        />
        <div className="absolute top-3 right-5 text-2xl">
          <button>
            <IoSearchOutline />
          </button>
        </div>
      </div>
      <NavigationClient></NavigationClient>
    </header>
  );
};

export default Header;
