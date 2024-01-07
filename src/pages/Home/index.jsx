import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import Why from "./components/Why";

const Home = () => {
  return (
    <section className="space-y-4 md:space-y-12 mt-12">
      <div className="flex flex-col h-[calc(100vh-3rem)]">
        <Hero />
      </div>
      <Categories />
      <Partners />
      <NewArrivals />
      <Why />
      <Featured />
      <Newsletter />
    </section>
  );
};

export default Home;
