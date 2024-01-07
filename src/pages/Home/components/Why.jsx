import React from "react";
import { FaTruck, FaShieldAlt, FaBox, FaCheckCircle } from "react-icons/fa";

const Why = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-primary lg:p-8 text-white">
      <div className="flex items-center gap-4 p-4">
        <FaCheckCircle className="text-4xl lg:text-6xl text-secondary" />
        <div className="flex flex-col lg:gap-2">
          <h4 className="text-lg lg:text-xl font-medium">Original Products</h4>
          <p className="text-sm">100% Original product that covered warranty by the vendor.</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <FaTruck className="text-4xl lg:text-6xl text-secondary" />
        <div className="flex flex-col lg:gap-2">
          <h4 className="text-lg lg:text-xl font-medium">Global Shipping</h4>
          <p className="text-sm">Your orders are shipped seamlessly between countries</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <FaShieldAlt className="text-4xl lg:text-6xl text-secondary" />
        <div className="flex flex-col lg:gap-2">
          <h4 className="text-lg lg:text-xl font-medium">100% Secure</h4>
          <p className="text-sm">Your payments are secure with our private security network.</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <FaBox className="text-4xl lg:text-6xl text-secondary" />
        <div className="flex flex-col lg:gap-2">
          <h4 className="text-lg lg:text-xl font-medium">30 Days Warrantly</h4>
          <p className="text-sm">You have the right to return your orders within 30 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
