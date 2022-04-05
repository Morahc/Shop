import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className='flex-grow px-6'>
      <div className='h-full flex flex-wrap items-center justify-center'>
        <div className='basis-full md:basis-1/2 p-6 space-y-8'>
          <h1 className='text-6xl'>All New Phones up to 25% Flat Sale</h1>
          <p className='text-lg'>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that
          </p>
          <button onClick={() => navigate('/products')} className='button-lg'>Shop Now</button>
        </div>
        <div className='hidden md:block md:basis-1/2'>
          <img src='images/hero-background.jpg' className='object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
