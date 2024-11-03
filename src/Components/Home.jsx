import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-green-300">
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gradient-to-tr from-green-300">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl text-grey-darkest">
              <Link className="no-underline text-green-600  font-bold hover:text-green-500" to="/">Green Tech</Link>
            </h1>

          </div>
          <nav>
            <ul className="list-reset md:flex md:items-center justify-around">
              <li className="md:ml-4">
                <Link to="/">Home</Link>
              </li>
              <li className="md:ml-4">
                <Link to="/Login">Login</Link>
              </li>
              <li className="md:ml-4">
              <Link to="/Signup">Signup</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Home;
