import React from "react";

const Newsletter = () => {
  return (
    <section className='p-4 lg:p-6'>
      <div className="bg-primary text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-md p-6 lg:p-8 space-y-2">
        <div className="lg:space-y-2">
          <h2 className="text-3xl lg:text-6xl">Newsletter</h2>
          <p className="text-sm lg:text-lg">
            Signup our newsletter to get update information, news, insight or promotions.
          </p>
        </div>
        <div className="flex">
          <input className="lg:w-[400px] form-input rounded-none" type="email" />
          <button type='submit' className="button rounded-none border bg-primary text-white">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
