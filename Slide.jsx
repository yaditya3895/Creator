export default function Slide() {
    return (

        <div class=" bg-black">
           

            <div class="max-w-screen-xl flex justify-items-center  mx-auto p-1">
                <h1  class="text-4xl text-green font-bold flex justify-center "><span class="text-green-700">Explore</span></h1>
                <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiWyJAQ0Te-qyY4YXgC0ix35mPJclgDY_7shwhc5b7tA0FaCec"
                   width={350} height={180} class="flex items-center space-x-3 h-17 rounded-full"
                    alt="" />
                    <p className="mt-6 mb-8 text-lg-1 sm:mb-12"><span class="text-green-700">"Explore the The India Gate </span> . 
                  <br  className="hidden md:inline lg-1:hidden" /><span class="text-green-700">This is a war memorial located near the Rajpath</span>"
              </p>
            </div>
            <div class="relative flex justify-center  items-start mx-auto p-1 ">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IbbAQsob8_qtdtOceIIaMsIC5jGbRP7CNo5vwLcEEgZ5FPKa"
                    width={350} height={180} class="h-17 rounded-full"
                    alt="" />  <p className="mt-6 mb-8 text-lg-1 sm:mb-12"><span class="text-green-700">"Its leaves, leaf buds, and stems</span>.  
                    <br  className="hidden md:inline lg-1:hidden" /><span class="text-green-700">Common names include tea plant.</span>"
                </p>
                  
            </div>
            <div class="flex justify-end  items-end mx-auto p-1   ">
                <img
                    src="https://m.media-amazon.com/images/I/61Axt3+ZypL._SY879_.jpg"
                    width={350} height={180} class="h-17 rounded-full"
                    alt="" />
                    <p className="mt-6 mb-8 text-lg-1 sm:mb-12"> <span class="text-green-700">"Darjeeling</span> 
                  <br  className="hidden md:inline lg-1:hidden" /><span class="text-green-700"></span>
              </p>
            </div>


        </div>
    )
};