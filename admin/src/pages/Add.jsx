import React, { useState } from "react";
import { assets } from "../assets/assets";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload_area" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" name="" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload_area" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" name="" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload_area" />
            <input  onChange={(e)=>setImage3(e.target.files[0])}type="file" name="" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload_area" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" name="" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          placeholder="type here"
          id=""
          required
          className="w-full max-w-[500px] py-2 px-3"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          placeholder="write content here"
          required
          className="w-full max-w-[500px] py-2 px-3"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select className="px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub-Category</p>
          <select className="px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div>
            <p className=" bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div>
            <p className=" bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div>
            <p className=" bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div>
            <p className=" bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div>
            <p className=" bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mb-2">
        <input type="checkbox" id="bestSeller" />
        <label htmlFor="bestSeller" className="cursor-pointer">
          Add to BestSeller
        </label>
      </div>

      <button
        type="submit"
        className="cursor-pointer w-28 py-3 mt-4 hover:bg-black text-white bg-gray-700 transition"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
