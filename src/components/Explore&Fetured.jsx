function ImgFrame(props) {
    return (
        <div className="w-1/3">
                <img src={props.src} className="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                <div>
                    <h1 className="font-semibold text-lg mb-2">{props.title}</h1>
                    <p className="text-sm">{props.description}</p>
                    <p className="font-bold text-3xl">{props.price}</p>
                </div>
        </div>
    )
}



function ExploreDiscoverBuy() {
    return (
        <>
{/* CONTAINER Explore. Dicover. Buy */}  
        <section id="Explore">
            {/* CONTENT */}
            <div className="text-black justify-center pt-4 items-center ">
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
                    <img className="w-full mb-6 h-full object-cover border-solid-gray border-2" alt="HOHAYA" src="./src/images/chambre.jfif" />
                </div>
                
            </div>
        </section>
        </>
    )
}


function FeturedProperties() {
    return (
        <div classNameName="">
{/*PROPERTIES & GALERIE */} 
            <section id="properties" className="flex w-full my-14 mb-14" >
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
                            <ImgFrame
                                src="./src/images/maisonchic-3.png"
                                title="Akodessewa Beach Villa"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nihil veritatis provident eum in.."
                                price="$489,000"
                            />
                            <ImgFrame
                                src="./src/images/imagesA.jpg"
                                title="Tokoin Boulevard Villa"
                                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus."
                                price="$846,000"
                            />
                            <ImgFrame
                                src="./src/images/maisonchic-4.png"
                                title="Segbe Cms"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing."
                                price="$$9173,000"
                            />
                        </div>
            {/* SECOND LOT IMAGES*/}
                    <div className="container flex mt-6 justify-between gap-5 ">
                        <ImgFrame
                            src="./src/images/imagesB.jpg"
                            title="Rafiti"
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae dolor et illum!"
                            price="$387,000"
                        />
                        <ImgFrame
                            src="./src/images/imagesC.jpg"
                            title="Dodji Valley Lodge"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing."
                            price="$745,000"
                        />
                        <ImgFrame
                            src="./src/images/maisonchic-3.png"
                            title="Clet hill Estate"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut? Illo."
                            price="$287,000"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export { ExploreDiscoverBuy , FeturedProperties}