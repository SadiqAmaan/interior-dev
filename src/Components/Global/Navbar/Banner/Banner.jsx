import React from 'react'

const Banner = () => {
    return (
        <main className="p-8">
          <section className="relative bg-black rounded-lg overflow-hidden">
            <img src="/images/Banner.jpg" alt="Living Room" className="w-full h-auto object-cover opacity-70" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-white">Z&Z Interiors</h2>
            </div>
          </section>
        </main>
      );
}

export default Banner
