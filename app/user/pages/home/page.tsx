import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="backdrop-blur-2xl w-full shadow-lg tracking-tighter gap-5 flex flex-col bg-gradient-to-b from-green-50 to-green-100 p-5 md:p-10 z-10">
        <section>
          <div className="text-2xl font-semibold">
            Welcome, Tony Stark!
          </div>
        </section>

        <section className="flex justify-center md:justify-start items-center gap-10">
          <input
            type="text"
            placeholder="Search where you work (eg :- hexaware)"
            className="backdrop-blur-2xl shadow-lg border flex justify-center items-center bg-amber-100 focus:outline p-2 rounded-md w-full md:w-96"
          />
          <Button className="bg-green-700 hover:bg-green-900 flex justify-center items-center backdrop-blur-2xl shadow-lg px-6 py-2">
            Search
          </Button>
        </section>
      </header>

      <section className="flex-1 relative overflow-hidden  tracking-tighter">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"></div>

        <div className="relative z-10 h-full overflow-y-auto p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative border-none p-6 rounded-xl shadow-xl bg-black backdrop-blur-md overflow-hidden max-w-md">
              {/* Background image with opacity */}
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/dummy.jpg')] before:bg-cover before:bg-center before:opacity-70 before:rounded-xl"></div>

              {/* Overlay for better contrast (optional) */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>

              {/* Content */}
              <div className="relative z-10 text-white p-1">
                <h3 className="text-2xl font-bold mb-1">Hexware Technologies</h3>
                <p className="text-sm font-light mb-3">Loma IT Park</p>
                <p className="text-base mb-5 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
                </p>
                <div className="flex justify-start">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Link href={'/user/pages/moreinfo'}>Open</Link>
                  </Button>
                </div>
              </div>
            </div>


            {/* Card 2 */}
            <div className="relative border-none p-6 rounded-xl shadow-xl bg-black backdrop-blur-md overflow-hidden max-w-md">
              {/* Background image with opacity */}
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/dummy2.webp')] before:bg-cover before:bg-center before:opacity-70 before:rounded-xl"></div>

              {/* Overlay for better contrast (optional) */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>

              {/* Content */}
              <div className="relative z-10 text-white p-1">
                <h3 className="text-2xl font-bold mb-1">Hexaware Technologies</h3>
                <p className="text-sm font-light mb-3">Milliniem Business Park</p>
                <p className="text-base mb-5 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit accusantium culpa iste mollitia natus ab nostrum expedita nihil nulla doloremque.
                </p>
                <div className="flex justify-start">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Link href={'/user/pages/company'}>Open</Link>
                  </Button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
