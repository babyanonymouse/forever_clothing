import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600z">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dicta quidem autem, commodi mollitia earum atque fugiat officiis
            suscipit animi iusto. Non possimus iste dolore similique ea,
            voluptatem cupiditate blanditiis.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1234567890</li>
            <li>someone@foreveryou.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright {year} &copy; forever.com | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
