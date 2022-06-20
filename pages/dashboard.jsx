import React from "react";

import Navbar from "../components/Navbar";

const dashboard = () => {
  return (
    <>
      <Navbar />

      <main className="w-3/4 mx-auto my-8">
        <p className="m-8 text-2xl">Total Investments: 22k</p>

        <section className="flex justify-around items-center">
          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Mutual Funds</h3>
            <p className="text-2xl">20k</p>
          </div>

          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Stocks</h3>
            <p className="text-2xl">2k</p>
          </div>

          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Crypto</h3>
            <p className="text-2xl">-</p>
          </div>

          <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Gold</h3>
            <p className="text-2xl">-</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default dashboard;
