import products from "../productContent";
import ProductCard from "./ProductCard";


function ProductGrid() {
    console.log(products)
  return (
    <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
      {products.map((product)=>{
        return <ProductCard key={product} product={product} />
      })}
    </div>
  );
}

export default ProductGrid;
