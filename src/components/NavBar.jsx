import { react } from "react";

function NavBar() {
  return <div className=" bg-[#f1f1f1] justify-center items-center" >
            {/*NAVBAR */}
                <div className="hallContainer w-full ">
                    <div className="  w-20 h-12 shrink-0">
                        <a href="">
                        <img className="w-auto h-full" alt="HOHAYA" src="./src/images/IMG_7352.PNG" />
                        </a>
                    </div>
                    <div className="hallContainer ">
                        <ul className="containerItems">
                            <li className="btnWhite"><a href="index.html">Home</a></li>
                            <li><a href="#properties" className="btnBlack">Properties</a></li>
                            <li><a href="#about" className="btnBlack">About Us</a></li>
                            <li><a href="#testimonials" className="btnBlack">Testimonials</a></li>
                            <li><a href="#blog" className="btnBlack">Blog</a></li>
                            <li><a href="#faq" className="btnBlack">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="hallContainer ">
                        <div className="w-4 mr-2 ">EN</div>
                        <button className="btnWhite ml-auto hover:bg-blue-200 ">
                                Contact Us
                        </button>
                    </div>
                </div>
        </div>
}
export default NavBar;