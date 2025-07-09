import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="container max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:grid md:grid-cols-[1fr,auto] md:px-5 xl:px-0">
        <div className="">
          <a href="/" className="logo ">
            <img
              src="/images/logo-nav.png"
              width={100}
              height={100}
              alt="Jihadan Beckhianosyuhada"
            />
          </a>
        </div>
        <div className="relative md:justify-self-end">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        {/* <a href="#contact" className='btn  btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a> */}
      </div>
    </header>
  );
};

export default Header;
