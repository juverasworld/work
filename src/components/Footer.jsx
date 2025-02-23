function Footer() {
  return (
   <footer className="bg-slate-900 shadow-md">
    <div className="container mx-auto px-4">
        <div className="min-h-16">
            <div className="flex justify-between items-center flex-col md:flex-row py-10">
                <h2 className="text-4xl text-white font-bold ">Subscribe Our Newsletter</h2>
                <form action="" className="md:w-1/3 w-full mt-8 md:mt-0 relative">
                    <input type="text" placeholder="Enter Your Email" className="py-4 px-4 rounded shadow-md w-full" />
                    <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1 ">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div className="">
        
    </div>
   </footer>
  );
}

export default Footer;
