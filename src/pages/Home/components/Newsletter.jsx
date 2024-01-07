import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    toast(
      <div className="text-black">
        <div className="font-medium flex gap-2 items-center">
          <FaCheckCircle className="text-green-500" />
          <h2>Success</h2>
        </div>
        <p className="text-xs lg:text-sm">Thank you for subscribing</p>
      </div>
    );
  };

  return (
    <section className="p-4 lg:p-6">
      <div className="bg-primary text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-md p-6 lg:p-8 space-y-2">
        <div className="lg:space-y-2">
          <h2 className="text-3xl lg:text-6xl">Newsletter</h2>
          <p className="text-sm lg:text-lg">
            Signup our newsletter to get update information, news, insight or promotions.
          </p>
        </div>
        <form className="flex">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="lg:w-[400px] form-input rounded-none"
            type="email"
            required
          />
          <button
            onClick={(e) => onSubmit(e)}
            type="submit"
            className="button font-bold rounded-none bg-secondary text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
