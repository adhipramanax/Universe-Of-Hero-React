import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

import hero from "../../assets/images/hero.png";

const index = () => {
  return (
    <>
      <div>
        <img src={hero} alt="" />

        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link to="/">HOME</Link>
            <Link to="/">home</Link>
            <Link to="/">home</Link>
            <Link to="/">home</Link>
            <Link to="/">home</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default index;
