import CardProduct from "./CardProduct";

const FeaturedProduct = ({ featured }) => {
  return (
    <div className="w-11/12 bg-gray-50 flex gap-4 m-auto">
      {featured.map((el) => (
        <CardProduct key={el._id} product={el}></CardProduct>
      ))}
    </div>
  );
};

export default FeaturedProduct;
