


function ExploreDiscoverBuy() {
    return (
        <>
            {/* CONTAINER Explore. Dicover. Buy */}  
                <section id="Explore">
                    {/* CONTENT */}
                    <div class="text-black justify-center pt-4 items-center ">
                        <div class="flex w-full mb-auto">
                            <div class=" w-3/4  ">
                                <p class="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Explore. Dicover. Buy</p>
                                <h1 class="text-5xl mt-12">Find your best <br /> home to living</h1>
                            </div>
                            <div class="w-2/4 ">
                                <p class="">
                                    Discover your ideal home with ease. Browse through a curated selection of properties, connect with expert agents, and find the perfect place to call your own - whether you're a first-time buyer or looking to invest.
                                </p>
                                <button class="btnBlack mt-6  font-semibold  ">Get Started  --></button>
                            </div>
                        </div>
                        <div class="mt-6">
                            <img class="w-full mb-6 h-full object-cover border-solid-gray border-2" alt="HOHAYA" src="images/chambre.jfif" />
                        </div>
                        
                    </div>
                </section>
        </>
    )
}


function FeturedProperties() {
    return (
        <div className="">
            {/*PROPERTIES & GALERIE */} 
            <section id="properties" class="my-14 mb-10" >
                <div class="flex w-full mb-4">
                        <div class="w-3/4 mb-10">
                            <p class="inline-flex hover:bg-gray-200 items-center bg-white py-1 px-4 text-sm rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-black mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>Fetured Properties</p>
                            <h1 class="text-5xl mt-10">Discover your <br /> dreaming home</h1>
                        </div>
                        <div class="w-2/4 ">
                            <p class="mt-6 text-sm">
                                Explore an exclusive selection of premium properties. meticuliously curated to provide you with the best in luxury living and prime real estate investement options, tailored to your needs
                            </p>
                        </div>
                    </div>
                <div>
                    <div class="flex items-center ">
                    {/* Properties liste*/}
                        <ul class="justify-center flex flex-wrap gap-4  pl-2 pr-4 py-4 items-center rounded-full">
                            <li class="bg-gray-800 px-4 py-2 text-gray-100 rounded-full font-semibold hover:bg-gray-200 hover:text-gray-900  hover:shadow-3xl transition"><a href="">All properties</a></li>
                            <li class="bg-white py-2 px-4 rounded-3xl  shadow-lg hover:bg-blue-200 "><a href="">Family House</a></li>
                            <li class="bg-white py-2 px-4 rounded-3xl  shadow-lg hover:bg-blue-200 "><a href="">Villa</a></li>
                            <li class="bg-white py-2 px-4 rounded-3xl  shadow-lg hover:bg-blue-200"><a href="">Apartement</a></li>
                            <li class="bg-white py-2 px-4 rounded-3xl  shadow-lg hover:bg-blue-200"><a href="">Mansions</a></li>
                            <li class="bg-white py-2 px-4 rounded-3xl  shadow-lg hover:bg-blue-200"><a href="">Green House</a></li>
                        </ul>
                    </div>
                    {/* <!-- Galerie Discover your
dreaming home -->*/}
                    <div class=" gap-6 justify-center items-center py-2">
                        <div class="container mt-8 flex  gap-5 ">
                        <div class="w-1/3">
                            <img src="images/maisonchic-3.png" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Akodessewa Beach Villa</h1>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nihil veritatis provident eum in..</p>
                                <p class="font-bold text-3xl">$489,000</p>
                            </div>
                        </div>
                        <div class="w-1/3">
                            <img src="images/imagesA.jpg" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Tokoin Boulevard Villa</h1>
                                <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus.</p>
                                <p class="font-bold text-3xl">$846,000</p>
                            </div>
                        </div>
                        <div class="w-1/3">
                            <img src="images/maisonchic-4.png" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Segbe Cms</h1>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p class="font-bold text-3xl">$9173,000</p>
                            </div>
                        </div>
                    </div>
                    <div class="container flex mt-6 justify-between gap-5 ">
                        <div class="w-1/3">
                            <img src="images/imagesB.jpg" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Rafiti </h1>
                                <p class="text-sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae dolor et illum!</p>
                                <p class="font-bold text-3xl">$387,000</p>
                            </div>
                        </div>
                        <div class="w-1/3">
                            <img src="images/imagesC.jpg" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Dodji Valley Lodge</h1>
                                <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                                <p class="font-bold text-3xl">$745,000</p>
                            </div>
                        </div>
                        <div class="w-1/3">
                            <img src="images/maisonchic-3.png" class="w-full h-64 object-cover mb-6 rounded-2xl" alt="" />
                            <div>
                                <h1 class="font-semibold text-lg mb-2">Clet hill Estate</h1>
                                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut? Illo.</p>
                                <p class="font-bold text-3xl">$287,000</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { ExploreDiscoverBuy , FeturedProperties}