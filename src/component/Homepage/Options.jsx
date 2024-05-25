import React from "react";
import { Link } from "react-router-dom";

function Options() {
  return (
    <div className="flex justify-center">
      <div className="p-4 flex justify-between items-center max-w-md gap-[5rem]">
        <div className="text-center">
          <Link to={"/store"}>
            <img
              src="https://via.placeholder.com/150"
              alt="Store"
              className="mb-2"
            />
          </Link>
          <Link to={"/store"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Store
            </button>
          </Link>
        </div>
        <div className="text-center">
          <Link to={"/category"}>
            <img
              src="https://via.placeholder.com/150"
              alt="Category"
              className="mb-2"
            />
          </Link>
          <Link to={"/category"}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Options;
