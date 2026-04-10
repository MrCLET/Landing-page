import ImgFrame from './ImgFrame.jsx'
import images from './Images.jsx'



function createImage(image) {
    return(
        <ImgFrame
            src= {image.imgUrl}
            title= {image.title}
            description= {image.description}
            price= { `$ ${image.price}.00`}
        />
    )
}



//EXPLORE
function Explore() {
    return (
        <>
{/* CONTAINER Explore. Dicover. Buy */}  
        <section id="Explore">
            {/* CONTENT */}
            <div className="bg-[#f1f1f1] text-gray-900 items-center p-16  py-10 minh-screen ">
                <div className="flex w-full mb-auto">
                    <div className=" w-3/4  ">
                        <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Explore. Dicover. Buy</p>
                        <h1 className="text-5xl mt-12">Find your best <br /> home to living</h1>
                    </div>
                    <div className="w-2/4 ">
                        <p className="">
                            Discover your ideal home with ease. Browse through a curated selection of properties, connect with expert agents, and find the perfect place to call your own - whether you're a first-time buyer or looking to invest.
                        </p>
                        <button className="btnBlack mt-6  font-semibold  ">Get Started  --></button>
                    </div>
                </div>
                <div className="mt-6">
                    <img className="w-full mb-6 h-full object-cover border-solid-gray border-2" alt="HOHAYA" src={images[2].imgUrl} />
                </div>
                
            </div>
        </section>
        </>
    )
}

//PROPERTIES
function Properties() {
    return (
        <div classNameName="">
{/*PROPERTIES & GALERIE */} 
            <section id="properties" className=" w-full mb-14 mb-14 bg-[#f1f1f1] text-gray-900 items-center p-10 px-20 minh-screen" >
                <div className="flex w-full mb-4">
                    <div className="w-3/4 mb-10">
                        <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Fetured Properties</p>
                        <h1 className="text-5xl mt-10">Discover your <br /> dreaming home</h1>
                    </div>
                    <div className="w-2/4 ">
                        <p className="mt-6 text-sm">
                            Explore an exclusive selection of premium properties. meticuliously curated to provide you with the best in luxury living and prime real estate investement options, tailored to your needs
                        </p>
                    </div>
                </div>
                <div>
{/* List Button*/}
                    <div className="flex items-center ">
                        <ul className="justify-center flex flex-wrap gap-4  pl-2 pr-4 py-4 items-center rounded-full">
                            <li className="btnBlack font-semibold"><a href="">All properties</a></li>
                            <li className="btnWhite"><a href="">Family House</a></li>
                            <li className="btnWhite "><a href="">Villa</a></li>
                            <li className="btnWhite"><a href="">Apartement</a></li>
                            <li className="btnWhite"><a href="">Mansions</a></li>
                            <li className="btnWhite"><a href="">Green House</a></li>
                        </ul>
                    </div>
{/* ALL PROPERTIES*/}
            {/* FIRST LOT IMAGES*/}
                    <div className="container mt-8 flex gap-6 justify-center items-center py-2">
                            {
                                createImage(images[1])
                            };
                            {
                                createImage(images[2])
                            };
                            {
                                createImage(images[3])
                            }
                            
                        </div>
            {/* SECOND LOT IMAGES*/}
                    <div className="container flex mt-6 justify-between gap-5 ">
                            {
                                createImage(images[4])
                            };
                            {
                                createImage(images[5])
                            };
                            {
                                createImage(images[2])
                            }
                    </div>
                </div>
            </section>
        </div>
    )
}

// ABOUT US 
function AboutUs() {
    return(
         <div className="bg-white h-150 flex my-4 p-16  py-10 gap-6">
                <div className="w-1/2">
                    <p className="inline-flex text-gray-900 hover:bg-gray-200  items-center bg-[#f1f1f1] py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-gray-900 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12"/></svg>About Us</p>
                    <h1 className="text-5xl mt-6">Custom Real Estate <br/>Help For Everyone </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe totam amet quod, magni ab nostrum!</p>
                    <div className="max-w-3xl mx-auto grid grid-cols-3 pt-4 text-center gap-4">
                        <div className="bg-gray-100 p-4  rounded-2xl">
                            <h2 className="counter text-4xl font-semibold" data-target="1200">0</h2>
                            <p>Properties sold</p>
                        </div>

                        <div className="bg-gray-100 p-4 items-center rounded-2xl">
                            <h2 className=" text-4xl font-semibold" data-target="95">95% </h2>
                            <p className="" >Customers Satisfation</p>
                        </div>

                        <div className="bg-gray-100 p-4 items-center rounded-2xl">
                            <h2 className=" text-4xl font-semibold" data-target="">$500M+</h2>
                            <p>In Transaction</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-auto h-full" src="images/maisonchic-1.png" alt="" />
                </div>
            </div>
    )
};

// TESTIMONIALS 
function Testimonials() {
    return(
        <div className="bg-[#f1f1f1] text-gray-900 items-center p-10 px-20 minh-screen" >
            <div className=" flex justify-center items-center">
                <div className="text-center max-w-3xl px-6 py-10" >
                    <p className="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Testimonials</p>
                    <h1 className="text-6xl font-bold my-4">What our clients say</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, doloribus eligendi. Animi labore ipsum harum pariatur dolore magnam ullam id consequatur modi excepturi, rerum deserunt.</p>
                </div>
            </div>
        

            <div className="flex justify-between mb-16 gap-5">
                <div className="w-1/3 bg-white p-4">
                    <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos similique ullam ea, ut architecto praesentium nisi fugiat a? Veniam iste facilis soluta minus beatae!
                    </p>
                    <div className="flex justify-between gap-2 items-center">
                        <div className="">
                            <img className="w-12 h-12 rounded-lg" src="./src/images/chat1.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">BeLo le rich</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="">
                            <p>
                                ⭐⭐⭐⭐⭐
                                5.0 Ratings
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-1/3 bg-white p-4">
                    <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos similique ullam ea, ut architecto praesentium nisi fugiat a? Veniam iste facilis soluta minus beatae!
                    </p>
                    <div className="flex justify-between gap-5 items-center">
                        <div className="">
                            <img className="w-12 h-12 rounded-lg" src="./src/images/chat2.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">BeLo le rich</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="">
                            <p>
                                ⭐⭐⭐⭐⭐
                                5.0 Ratings
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-1/3 bg-white p-4">
                    <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"/></svg>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eos similique ullam ea, ut architecto praesentium nisi fugiat a? Veniam iste facilis soluta minus beatae!
                    </p>
                    <div className="flex justify-between gap-5 items-center">
                        <div className="">
                            <img className="w-12 h-12 rounded-lg" src="./src/images/chat3.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">BeLo le rich</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="">
                            <p>
                                ⭐⭐⭐⭐⭐
                                5.0 Ratings
                            </p>
                        </div>

                    </div>
                </div>
            </div>
       </div>
    )
};

//FAQ
function Faq() {
    return(
        <div id="faq" class="bg-white min-h-screen  py-10 h-150">

            <div class="p-16 flex">
            <div class="left  w-1/2">
                <div class="mt-10 ">
                    <p class="inline-flex hover:bg-gray-200 items-center bg-gray-100 py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>FAQ</p>
                    <h1 class="text-6xl font-semibold my-4">Frequently Asked <br />Questions</h1>
                    <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia architecto eligendi repellendus?</p>
                </div>
            </div>
            <div class="right w-1/2">
{/**LISTE OF ITEMS */}
                <div class="border-b">
                    <button class="w-full flex justify-between items-center py-4 text-left font-medium accordion-btn">
                        How do I start searching for a property?
                        <span class="transition-transform duration-300">⌄</span>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300 accordion-content">
                        <p class="pb-4 text-gray-600">
                        You can begin by using our property search tool...
                        </p>
                        <p class="pb-4 border-b text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia, distinctio ex illo, at consequuntur aliquid, odio recusandae ab quasi libero!</p>
                        <p class="pb-4 border-b text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi, culpa suscipit asperiores molestias vero similique quidem est ipsa repellendus error illum.</p>
                        <p class="pb-4 border-b text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id repellendus asperiores!</p>
                    </div>
                </div>
{/**ITEMS */}
                <div class="border-b">
                    <button class="w-full flex justify-between items-center py-4 text-left font-medium accordion-btn">
                    How can I determine my budget?
                    <span class="transition-transform duration-300">⌄</span>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300 accordion-content">
                    <p class="pb-4 border-b text-gray-600">
                        Evaluate your income and expenses before buying.
                    </p>
                    <p class="pb-4 border-b text-gray-600" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quaerat non blanditiis perspiciatis, adipisci hic in tempora voluptate nam. Minima odit modi pariatur fuga aperiam saepe!</p>
                    <p class="pb-4 border-b text-gray-600" >Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nulla rem!</p>
                    </div>
                </div>

                <div class="border-b">
                    <button class="w-full flex justify-between items-center py-4 text-left font-medium accordion-btn">
                    What mistakes should I avoid?
                    <span class="transition-transform duration-300">⌄</span>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300 accordion-content">
                    <p class="pb-4 text-gray-600">
                        Avoid rushing decisions and skipping inspections.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="left w-1/2 ">
            <div class="">
                <img src="images/maisonchicinvers.png" class="h-7xl" alt="" />
            </div>
        </div>
        <div class="right  w-1/2">
            <div class="mt-10 ">
                    <p class="inline-flex hover:bg-gray-200 items-center bg-gray-100 py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Join Out Newletter</p>
                    <h1 class="text-6xl font-semibold my-4">Ready to Find Your <br /> Dream Home with <br />Urbanouse?</h1>
                    <p class="text-sm text-gray-500 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga expedita accusantium, saepe aliquam facilis alias eligendi! Natus adipisci nobis laboriosam accusamus!</p>
                    <button class=" bg-gray-800 mt-6 text-gray-100 px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-gray-200 hover:text-gray-900 hover:shadow-2xl transition ">Let work together  --></button>
                </div>
        </div>
        </div>
    </div>
    )
}






export { Explore , Properties ,Testimonials ,AboutUs, Faq}