import React from "react";
import { useContext } from "react";
import ProductContext from "../../../context/product/ProductContext";

const NewArrivalCard = ({ product }) => {
  return (
    <div className="w-full p-2 lg:p-4">
      <div className="flex flex-col items-center gap-2 lg:gap-4 h-full w-full">
        <div className="h-48">
          <img className="max-h-full max-w-full" src={product.image} alt={product.productName} />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-sm line-clamp-2">{product.productName}</p>
          <p className="text-xs md:text-sm font-light">&#8358;{product.price}</p>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const { newArrivals } = useContext(ProductContext);

  return (
    <section className="container space-y-3 lg:space-y-6">
      <h1 className="text-2xl lg:text-4xl font-medium ">New Arrivals!</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {newArrivals.map((product) => (
          <NewArrivalCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
