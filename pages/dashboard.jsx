import React from "react";

import Navbar from "../components/Navbar";

const dashboard = () => {
  return (
    <>
      <Navbar />

      <main className=" bg-slate-200 w-3/4 mx-auto my-4 mt-28 rounded-lg py-1">
        <p className="m-8 text-2xl">Total Investments: 22k</p>

        <section className="flex justify-around items-center">
          <div className=" bg-blue-500 hover:text-white hover:bg-blue-700 text-white active:bg-blue-400 flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Mutual Funds</h3>
            <p className="text-2xl">20k</p>
          </div>

          <div  className=" bg-green-500 hover:text-white hover:bg-green-600 text-white active:bg-green-400 flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Stocks</h3>
            <p className="text-2xl">2k</p>
          </div>

          <div className=" bg-purple-800 hover:text-white hover:bg-purple-900 text-white active:bg-purple-600 flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Crypto</h3>
            <p className="text-2xl">-</p>
          </div>

          <div className="bg-yellow-500 hover:text-white hover:bg-yellow-600 text-white active:bg-amber-400 flex flex-col items-center border-2 border-gray-300 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl scale-100 hover:scale-105 w-1/5 px-8 py-4 gap-2 font-medium transition">
            <h3>Gold</h3>
            <p className="text-2xl">-</p>
          </div>
        </section>

        <section className=" p-4 border border-black rounded-lg m-8 shadow-xl">
          <h2 className="text-2xl  font-semibold text-blue-600 ">Mutual Funds</h2>

          <table className="w-full text-center my-4">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Invested Value</th>
                <th>Current Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mutual Fund 1</td>
                <td>15000</td>
                <td>8000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mutual Fund 2</td>
                <td>25000</td>
                <td>12000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className=" p-4 border border-black rounded-lg m-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-green-600">Stocks</h2>

          <table className="w-full text-center my-4">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Invested Value</th>
                <th>Current Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Stock 1</td>
                <td>5000</td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className=" p-4 border border-black rounded-lg m-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-700">Crypto</h2>

          <p className="my-4">Nothing's invested till now</p>
        </section>

        <section className="p-4 border border-black rounded-lg m-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-amber-600">Gold</h2>
           <p className="my-4">Nothing's invested till now</p>
        </section>
      </main>
    </>
  );
};

export default dashboard;
