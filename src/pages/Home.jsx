import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { setSelectedCategory } from "../features/products/ProductSlice";

// eslint-disable-next-line no-unused-vars
const categories = [
  "All",
  "Graphic cards",
  "Laptops",
  "Monitors",
  "Motherboards",
  "Power supply",
  
];
function Home() {
  const dispatch = useDispatch();
    
  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4 w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto ">
      
          {categories.map((category) => (
            <button
              key={category}
              onClick={()=>dispatch(setSelectedCategory(category))}
              className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
            >
              {category}
            </button>
          ))}
        </div>
        <ProductGrid/>
      </div>
       <Footer/>
    </div>
  );
}

export default Home;
