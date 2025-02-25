// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
// import products from "../productContent";
import ProductCard from "./ProductCard";


function  ProductGrid() {
const products = useSelector((state) => state.products.filteredItems );
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
      {products.map((product)=>{
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  );
}

export default ProductGrid;
