import About from './components/About';
import Featured from './components/Featured';
import Hero from './components/Hero';

const Home = () => {
  return (
    <section className='space-y-4 md:space-y-12'>
      <div className='flex flex-col h-screen'>
        <Hero />
      </div>
      <Featured />
      <About />
    </section>
  );
};

export default Home;
