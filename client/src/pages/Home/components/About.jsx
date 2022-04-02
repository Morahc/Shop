import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center p-6'>
      <div className='w-full md:w-1/2 space-y-4'>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam exercitationem
          quaerat deleniti consequuntur voluptates similique fuga illo cum possimus in sit incidunt
          aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam exercitationem
          quaerat deleniti consequuntur voluptates similique fuga illo cum possimus in sit incidunt
          aspernatur, enim eveniet cupiditate ut dicta dolore nobis, velit consectetur, voluptas
          molestias necessitatibus!
        </p>
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center'>
        <img
          src='https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/M/193053_1644328997.jpg'
          className='h-48 w-full object-contain md:h-full md:w-80'
        />
      </div>
    </section>
  );
};

export default About;
