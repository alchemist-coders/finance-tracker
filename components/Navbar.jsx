import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-8 py-4 border-b-2 shadow-lg  ">
      <h1 className=" text-3xl m-2 font-semibold ">Finance Tracker </h1>
      <ul className="flex justify-around text-xl gap-4   ">
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>Transactions</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
