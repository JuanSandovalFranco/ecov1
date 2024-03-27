import Image from "next/image";

const CardProduct = ({ product }) => {
  return (
    <div key={product._id} className="px-4 py-3 flex flex-col gap-3 shadow-xl">
      <Image
        src="https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-7380019_823x.jpg?v=1673373619"
        width="200"
        height="200"
      ></Image>
      <span className="text-2xl text-gray-900">{product.name}</span>
      <span>
        <span className="font-bold text-gray-700 text-xl">
          {" "}
          ${new Intl.NumberFormat("es").format(product.price)}
        </span>
        {product?.price_discount ? <span>{product.price_discount}</span> : null}
      </span>
    </div>
  );
};

export default CardProduct;
