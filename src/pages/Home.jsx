import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

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
  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4 w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto ">
          {/* <button className=" bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in">
            {" "}
            All
          </button> */}
          {categories.map((category) => (
            <button
              key={category}
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
