/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import logo from "/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../features/products/ProductSlice";
function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product);
  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row  px-4 md:px-2 items-center relative">
            <div className="flex gap-4">
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="">
                <Link to={"/"}>About</Link>
              </li>
              <li className="">
                <Link to={"/"}>FAQs</Link>
              </li>
              <li className="">
                <Link to={"/"}>Contact</Link>
              </li>
            </div>
            <div
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zine-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li className="">
                <Link to={"/"}>Sign Up</Link>
              </li>
              <li className="">
                <Link to={"/"}>My Account</Link>
              </li>
            </div>
            <User
              size={40}
              onClick={handleUser}
              className="bg-gray-200 p-2  text-black rounded cursor-pointer"
            />
          </ul>
        </div>

        <nav className="flex justify-between container items-center mx-auto md:py-6 py-8  px-2">
          <div className="flex items-center">
            <Link to={"/"} className="bg-gray-700 py-2 px-4 rounded">
              <img src={logo} alt="" className="w-10" />
            </Link>
          </div>
          <form action="" className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="search product"
              value={searchTerm}
              onChange={(e)=>dispatch(setSearchItem(e.target.value))}
              className="bg-zinc-100 rounded-md border border-sinc-200 focus:outline-none py-3 px-3 w-full "
            />
          </form>
          <Link to={"/cart"}>
            <ShoppingCart
              size={54}
              className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
            />
          </Link>
        </nav>
      </>
    </header>
  );
}

export default Navbar;
