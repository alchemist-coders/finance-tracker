import React from "react";
import Navbar from "../components/Navbar";

const transactions = () => {
  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto my-8 mt-36">
        <h1 className="m-8 text-4xl">Transactions</h1>
        <section>
          <table className="w-full text-center my-4">
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Date</th>
                <th>Name</th>
                <th>Category</th>
                <th>Side</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>dd-mm-yyyy</td>
                <td>mf 1</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>dd-mm-yyyy</td>
                <td>mf 2</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>dd-mm-yyyy</td>
                <td>mf 3</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>dd-mm-yyyy</td>
                <td>mf 4</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>dd-mm-yyyy</td>
                <td>mf 5</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>6</td>
                <td>dd-mm-yyyy</td>
                <td>mf 6</td>
                <td>mf</td>
                <td>b</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default transactions;
