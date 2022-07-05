import React from "react";
import Navbar from "../components/Navbar";

const transactions = () => {
  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto my-8 mt-36">
        <h1 className=" text-green-600 font-semibold m-8 text-4xl">Transactions</h1>
        <section>
          <table className="bg-lime-100 rounded-xl shadow-lg w-full  text-center">
            <thead>
              <tr>
                <th className="p-4">Sl.no</th>
                <th className="p-4">Date</th>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Side</th>
                <th className="p-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">1</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 1</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
              <tr>
                <td className="p-2">2</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 2</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
              <tr>
                <td className="p-2">3</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 3</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
              <tr>
                <td className="p-2">4</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 4</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
              <tr>
                <td className="p-2">5</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 5</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
              <tr>
                <td className="p-2">6</td>
                <td className="p-2">dd-mm-yyyy</td>
                <td className="p-2">mf 6</td>
                <td className="p-2">mf</td>
                <td className="p-2">b</td>
                <td className="p-2">5000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default transactions;
