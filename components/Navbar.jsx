import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-8 py-4 border-b-2 shadow-lg  ">
      <h1 className=" text-3xl m-2 font-semibold ">Finance Tracker </h1>
      <ul className="flex justify-around text-xl gap-4">
        <li className="px-2 py-1 scale-100 hover:scale-105 rounded-lg border-b border-r border-transparent hover:border-black transition">
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li className="px-2 py-1 scale-100 hover:scale-105 rounded-lg border-b border-r border-transparent hover:border-black transition">Transactions</li>
        <li className="px-2 py-1 scale-100 hover:scale-105 rounded-lg border-b border-r border-transparent hover:border-black transition">Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
