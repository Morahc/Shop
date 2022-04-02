const ProductDetails = () => {
  return (
    <main className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-4 place-items-center'>
        <div className='md:col-span-2 w-full'>
          <img
            src='https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/M/193053_1644328997.jpg'
            alt='product'
          />
        </div>
        <div className='w-full p-4 space-y-4'>
          <h2>Product Name</h2>
          <p>Price</p>
          <p>
            Key Features:
            <br />
            <br />
            Bluetooth: Qualcomm QCC V5.1 for stable connection <br /> Ф40mm audio drivers deliver
            detailed and powerful sound <br /> Built-in rechargeable batteries allow up to 50 hours
            of playtime <br /> Noise reduction for clear phone conversations <br /> Connects to two
            Bluetooth devices simultaneously <br /> Find audio presets and more on the EDIFIER
            Connect app
          </p>
        </div>
        <div className='w-full p-4 flex flex-col items-center space-y-6 bg-slate-100'>
          <div className='flex justify-between w-full px-6'>
            <span>Price:</span>
            <span>0</span>
          </div>
          <div className='flex justify-between w-full px-6'>
            <span>Status:</span>
            <span>In stock</span>
          </div>
          <div className='flex justify-between items-center w-full px-6'>
            <p>Quality:</p>
            <select className='bg-gray-200 p-2'>
              {[...Array(10).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <button className='button w-full'>Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
