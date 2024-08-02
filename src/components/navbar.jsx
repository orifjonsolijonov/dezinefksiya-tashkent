// src/App.js
import React, { useState } from "react";
import logoImg from "../assets/images/logo.png";
import langIcon from "../assets/icons/language-icon.svg";
import menuIcon from "../assets/icons/menu-icon.svg";

function App() {
  const navList = ["Avfzalliklar", "Xizmlatlar", "Savollar", "Bog'lanish"];
  const [viewPort, setVievPort] = useState(window.innerWidth);
  const handleResize = () => {
    setVievPort(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
  }
  function closeSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hidden");
  }
  return (
    <header>
      <div className="container 2xl mx-auto flex items-center mt-[1.5rem]">
        <div className="logo_menu_wrapper flex items-center gap-5">
          <button className="menuBtn">
            <img
              src={menuIcon}
              alt="menu"
              onClick={showSidebar}
              className="bg-[#33A9FF] py-[.5rem] flex md:hidden
                          px-[1rem] lg:px-[1.5rem] rounded-full hover:bg-[#55B7FF] 
                          transition-all"
            />
          </button>
          <div className="logo w-[150px] md:w-[200px]">
            <a href="/" className="">
              <img src={logoImg} alt="dezinfeksiya-tashkent" className="" />
            </a>
          </div>
        </div>

        <nav>
          <ul className=" items-center justify-center gap-10 md:gap-5 hidden md:flex">
            {navList.map((nav) => {
              return (
                <li className="text-[#666666] hover:text-[#7d7d7d] text-lg">
                  <a href={"#" + nav}>{nav}</a>
                </li>
              );
            })}
          </ul>
          <ul className="sidebar transition-[width] ease-linear duration-[.5s] hidden flex-col gap-2 fixed left-0 top-0 h-full w-[70%] sm:w-[20rem] bg-[#efefef] shadow-md">
            <li className="m-5" onClick={closeSidebar}>
              <a href="">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <g clip-path="url(#clip0_2232_6)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 13.414L17.657 19.071C17.8456 19.2532 18.0982 19.354 18.3604 19.3517C18.6226 19.3494 18.8734 19.2443 19.0588 19.0588C19.2442 18.8734 19.3494 18.6226 19.3517 18.3604C19.354 18.0982 19.2532 17.8456 19.071 17.657L13.414 12L19.071 6.34303C19.2532 6.15443 19.354 5.90182 19.3517 5.63963C19.3494 5.37743 19.2442 5.12662 19.0588 4.94121C18.8734 4.7558 18.6226 4.65063 18.3604 4.64835C18.0982 4.64607 17.8456 4.74687 17.657 4.92903L12 10.586L6.34301 4.92903C6.15356 4.75137 5.90242 4.65439 5.64274 4.65861C5.38305 4.66283 5.1352 4.76791 4.95162 4.95162C4.76803 5.13533 4.66313 5.38326 4.65909 5.64295C4.65506 5.90263 4.75222 6.1537 4.93001 6.34303L10.586 12L4.92901 17.657C4.8335 17.7493 4.75731 17.8596 4.70491 17.9816C4.6525 18.1036 4.62491 18.2348 4.62376 18.3676C4.6226 18.5004 4.6479 18.6321 4.69818 18.755C4.74847 18.8779 4.82272 18.9895 4.91661 19.0834C5.0105 19.1773 5.12216 19.2516 5.24505 19.3018C5.36795 19.3521 5.49963 19.3774 5.63241 19.3763C5.76519 19.3751 5.89641 19.3475 6.01841 19.2951C6.14041 19.2427 6.25076 19.1665 6.34301 19.071L12 13.414Z"
                      fill="#444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2232_6">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            {navList.map((nav) => {
              return (
                <li className="text-[#555555] pl-5 pb-2 hover:bg-[#e3e3e3] text-[1.6rem] w-full">
                  <a href={"#" + nav}>{nav}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="change_lang bg-[#33A9FF] hidden md:flex
                        text-white py-[1rem] 
                          px-[1.5rem] lg:px-[3rem] rounded-full hover:bg-[#55B7FF] 
                          transition-all"
        >
          {viewPort < 500 ? "Ру" : "Русский"}{" "}
          <img src={langIcon} alt="language" />
        </button>
      </div>
    </header>
  );
}

export default App;
