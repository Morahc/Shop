import React from "react";
import categories from "../../../data/categories";

const CategoryCard = ({ item }) => {
  return (
    <div
      className={`rounded-xl shadow-md h-48 lg:h-60 relative bg-cover bg-center`}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className=" flex flex-col justify-center p-2 lg:p-6 h-full">
        <div className="space-y-2 lg:space-y-3">
          <h3 className="lg:text-lg font-semibold">{item.name}</h3>
          <p className="text-xs lg:text-sm w-1/2">{item.desc}</p>
          <button className="border rounded-md text-xs p-2 hover:text-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      {categories.map((i) => (
        <CategoryCard key={i.name} item={i} />
      ))}
    </section>
  );
};

export default Categories;
