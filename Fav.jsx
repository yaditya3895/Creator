
const Fav = () => {
    return (
      
      <section className="dark:bg-gray-80 dark:text-gray-700">
      <div className="container flex flex-col justify-center p-4 mx-auto sm:py-10 lg:py-20 md:flex-row md:justify-between">
          <div className="flex flex-col justify-center p-4 text-center rounded-sm md:max-w-md lg:max-w-lg md:text-left">
              <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight"><span class="text-blue-700">One</span> <br /><span class="text-green-700">Step</span><br />
                  <span className="dark:text-violet-600"><span class="text-blue-700">Marketplace For</span> <br /></span><span class="text-green-700">Influcencer</span>
              </h1>
              <p className="mt-6 mb-8 text-lg-1 sm:mb-12">"Unleash Your Influence :Sell Itineries, Build Your Brand.
                  <br  className="hidden md:inline lg-1:hidden" />Create Merch, and Share Content - All in  One Hub"
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a rel="noopener noreferrer" href="#" className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Demo Store</a>
                  <a rel="noopener noreferrer" href="#" className=" text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Join Waitlist</a>
              </div>
          </div>
      <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
              <img id="heroImg1" class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-3/5 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
            </div>
      </div>
  </section>
    )
  };
  
  export default Fav;
  