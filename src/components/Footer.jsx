import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl text-white font-bold text-white">
              Subscribe Our Newsletter
            </h2>
            <form action="" className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="">
              <img src={logo} alt="" className="w-10 my-4" />
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat quisquam fuga qui suscipit amet expedita impedit maxime
                assumenda debitis odio ad accusantium aperiam harum, eaque nihil
                minus. Ab, numquam explicabo.
              </p>
              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold my-4 ">Pages</h2>
              <ul>
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
              </ul>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold my-4 ">Category</h2>
              <ul>
                <li className="">
                  <Link to={"/"}>Monitors</Link>
                </li>
                <li className="">
                  <Link to={"/"}>GPUs</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Laptops</Link>
                </li>
                <li className="">
                  <Link to={"/"}>Power Supply</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold my-4 ">Category</h2>
              <p className=""> 70 Idodo Street Achara Layout Enugu Nigeria </p>
              <p className="">09157365242</p>
              <p className="">09157365242</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contianer mx-auto text-center py-4 text-white">
        <p className="">Copyright &copy; 2025 vera&apos;s print</p>
      </div>
    </footer>
  );
}

export default Footer;
