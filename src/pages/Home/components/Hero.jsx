import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="container flex-grow">
      <div className="h-full flex items-center justify-betwwen gap-6">
        <div className="basis-full md:basis-1/2 space-y-8">
          <h1 className="text-6xl lg:text-7xl">All New Phones up to 25% Flat Sale</h1>
          <p className="text-base md:text-lg">
            From cutting-edge wonders to timeless classics, we curate a collection that transcends
            ordinary boundaries. At GizmoGuru, we don&apos;t just sell gadgets; we craft experiences that
            redefine the way you interact with technology.
          </p>
          <button onClick={() => navigate("/products")} className="button-lg bg-primary">
            Shop Now
          </button>
        </div>
        <div className="hidden md:block md:basis-1/2">
          <img src="images/gadget.jpg" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
