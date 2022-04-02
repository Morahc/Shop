import Product from '../../components/Product';

const Shop = () => {
  return (
    <section>
      <div className='my-12 p-6'>
        <div className='flex mb-6 md:mb-8 justify-end'>
          <div className='flex'>
            <input type='text' name='search' className='form-input '/>
            <button className='button'>Search</button>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Shop;
