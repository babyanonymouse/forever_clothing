import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";  

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="contact_img"
          className="w-full max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <a href="#">
            <address className="text-gray-500 hover:text-black">
              54709 Willms Station Suite 350,
              <br /> Washington, USA
            </address>
          </a>
          <p className="text-gray-500">
            <span className="hover:text-black">
              <a href="tel:254123456789">Tel: 254 123456789</a>
            </span>
            <br />
            <span className="hover:text-black">
              <a href="mailto:admin@forever.com">Email: admin@forever.com</a>
            </span>
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about or teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition duration-500/*  */">
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
