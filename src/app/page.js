import Image from "next/image";
import Hero from "assets/hero_iphone14.jpg";
import { getAllProductsView } from "controllers/productController";
import { DBConnect } from "lib/DBConnect";

const featured = async () => {
  await DBConnect();
  return getAllProductsView();
};

export default async function page() {
  const featuredData = await featured();
  return (
    <main className="main flex flex-col p-5">
      <div className="bg-black flex w-11/12 h-80-screen relative my-5 m-auto rounded-xl">
        <Image
          src={Hero}
          width="400"
          className="m-auto -translate-x-40"
          alt="iphone celulares en tuganga"
        ></Image>
        <div className="absolute top-0 right-24 text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold text-center">iPhone 14 Pro Max</h1>
          <h2 className="text-2xl text-center mb-20">
            Redescubre la Fotografia
          </h2>

          <button className="text-xl font-bold text-blue-400 transition hover:scale-150">
            Saber Mas
          </button>
        </div>
      </div>
      <section>
        <h2 className="text-gray-700 text-2xl px-10 my-6">
          Productos en tendencia
        </h2>
        {featuredData.map((el) => el.name)}
      </section>
    </main>
  );
}
