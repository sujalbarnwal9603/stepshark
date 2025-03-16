import "./Footer.css"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Promotional banner - increased height and font size */}
      <div className="w-full">
        <div className="flex justify-center h-28 items-center bg-yellow-300 w-full">
          <h1 className="font-bold mr-10 text-lg">JOIN STEPSHARK AND GET 15% OFF</h1>
          <button
            className="relative font-sans text-sm tracking-widest uppercase 
                        text-white bg-black cursor-pointer border-2 px-3 py-2 md:px-4 
                        shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] 
                        select-none active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Sign up for free
          </button>
        </div>

        {/* Main footer content - increased padding and font size */}
        <div
          className="bg-white flex font-light text-left 
                    justify-between w-full px-10 py-10"
        >
          <div className="w-1/12"></div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">Products</li>
              <li className="py-1">Footwear</li>
              <li className="py-1">Clothing</li>
              <li className="py-1">Accessories</li>
              <li className="mb-4"></li>
              <li className="py-1">Outlet-Sale</li>
              <li className="py-1">New Arrivals</li>
              <li className="py-1">Flat 50% Off!</li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">Sports</li>
              <li className="py-1">CRICKET</li>
              <li className="py-1">Running</li>
              <li className="py-1">Football</li>
              <li className="py-1">Gym/Training</li>
              <li className="py-1">Tennis</li>
              <li className="py-1">Outdoor</li>
              <li className="py-1">Basketball</li>
              <li className="py-1">Swimming</li>
              <li className="py-1">Skateboard</li>
              <li className="py-1">Motorsport</li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">collections</li>
              <li className="py-1">Ultraboost</li>
              <li className="py-1">Superstar</li>
              <li className="py-1">NMD</li>
              <li className="py-1">Stan Smith</li>
              <li className="py-1">Sustainability</li>
              <li className="py-1">Predator</li>
              <li className="py-1">Parley</li>
              <li className="py-1">stepcolor</li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">support</li>
              <li className="py-1">Help</li>
              <li className="py-1">Customer Services</li>
              <li className="py-1">Returns & Exchanges</li>
              <li className="py-1">Shipping</li>
              <li className="py-1">Order Tracker</li>
              <li className="py-1">Store Finder</li>
              <li className="py-1">stepClub</li>
              <li className="py-1">
                stepClub Terms <br />
                and conditions
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">company info</li>
              <li className="py-1">About Us</li>
              <li className="py-1">stepshark stories</li>
              <li className="py-1">stepshark Apps</li>
              <li className="py-1">Entity Details</li>
              <li className="py-1">Press</li>
              <li className="py-1">Careers</li>
            </ul>
          </div>
          <div className="w-2/12">
            <ul className="text-base">
              <li className="font-bold uppercase mb-4 text-lg">follow us</li>
              <li className="py-1">Footwear</li>
            </ul>
          </div>
          <div className="w-1/12"></div>
        </div>

        {/* Bottom footer - increased height and padding */}
        <div className="text-gray-400 bg-[#242424] h-20 flex flex-col justify-center items-center text-sm w-full">
          <h3 className="flex mb-3">
            Privacy Policy &nbsp;&nbsp; <span>|</span> &nbsp;&nbsp; Terms and Conditions &nbsp;&nbsp; <span>|</span>{" "}
            &nbsp;&nbsp; Cookies Policy
          </h3>
          <h3>©️2025 stepshark India Marketing Pvt. Ltd</h3>
        </div>
      </div>
    </footer>
  )
}

