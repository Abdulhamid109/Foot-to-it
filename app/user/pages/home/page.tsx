import { Button } from '@/components/ui/button';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="backdrop-blur-2xl w-full shadow-lg tracking-tighter gap-5 flex flex-col bg-gradient-to-b from-green-50 to-green-100 p-5 md:p-10 z-10">
        <section>
          <div className="text-2xl font-semibold">
            Welcome, Tony Stark!
          </div>
        </section>
        <section>
          <div>Mumbai-Ghansoli Sector 1</div>
          <div className="font-thin tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti!</div>
        </section>
        <section className="flex justify-center md:justify-start items-center gap-10">
          <input
            type="text"
            placeholder="Search for the providers"
            className="backdrop-blur-2xl shadow-lg border flex justify-center items-center bg-amber-100 focus:outline p-2 rounded-md w-full md:w-96"
          />
          <Button className="bg-green-700 flex justify-center items-center backdrop-blur-2xl shadow-lg px-6 py-2">
            Search
          </Button>
        </section>
      </header>

      <section className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"></div>

        <div className="relative z-10 h-full overflow-y-auto p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border p-4 backdrop-blur-2xl shadow-2xl shadow-black/10 bg-white/40 rounded-lg">
              <div className="text-2xl font-semibold mb-2">AM Restaurant</div>
              <div className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 border border-black p-1 justify-center items-center rounded-2xl bg-pink-400/70">
                  <span className="text-green-700 font-medium">Veg</span>
                  <span className="text-red-500 font-medium">Non-veg</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Explore More
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border p-4 backdrop-blur-2xl shadow-2xl shadow-black/10 bg-white/40 rounded-lg">
              <div className="text-2xl font-semibold mb-2">PM Bistro</div>
              <div className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 border border-black p-1 justify-center items-center rounded-2xl bg-pink-400/70">
                  <span className="text-green-700 font-medium">Veg</span>
                  <span className="text-red-500 font-medium">Non-veg</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Explore More
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border p-4 backdrop-blur-2xl shadow-2xl shadow-black/10 bg-white/40 rounded-lg">
              <div className="text-2xl font-semibold mb-2">Evening Café</div>
              <div className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 border border-black p-1 justify-center items-center rounded-2xl bg-pink-400/70">
                  <span className="text-green-700 font-medium">Veg</span>
                  <span className="text-red-500 font-medium">Non-veg</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Explore More
                </Button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border p-4 backdrop-blur-2xl shadow-2xl shadow-black/10 bg-white/40 rounded-lg">
              <div className="text-2xl font-semibold mb-2">Horizan Energy</div>
              <div className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 border border-black p-1 justify-center items-center rounded-2xl bg-pink-400/70">
                  <span className="text-green-700 font-medium">Veg</span>
                  <span className="text-red-500 font-medium">Non-veg</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
