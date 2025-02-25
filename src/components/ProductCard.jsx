/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";

function ProductCard({product}) {
  // console.log(product.id)
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer ">
        <img
          src={product.image}
          alt={product.image}
          className="h-[503px] lg:w-[473px] w-full p-4"
        />
        <div className="bg-gray-50 p-4 w-full">
            <h2 className="text-lg font-semibold my-4">{product.title.substring(0, 25) + "..."}</h2>
            <p className="text-sm text-zinc-500 border-b-2 pb-4">{product.description}</p>

            <div className="flex justify-between  mt-4 items-center w-full">
                <p className="text-xl font-semibold">${product.price}</p>
                <p className="">View Details</p>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
