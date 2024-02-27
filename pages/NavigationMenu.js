import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavigationMenu = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-600">
        gelzaragoza
      </h1>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-lg text-black dark:text-white hover:text-gray-300 dark:hover:text-white focus:outline-none transition duration-300"
          >
            <BsFillMoonStarsFill />
          </button>
          <a
            href="https://drive.google.com/file/d/13c05qrNdjCBXko6Z7nMIeYy7Nj9SoR5T/view"
            target="_blank"
            rel="noopener noreferrer"
            download="AngelicaResume.pdf"
            className="text-sm md:text-base lg:text-lg px-3 py-1 md:px-4 md:py-2 lg:py-3 rounded-md font-semibold text-rose-600 hover:text-rose-300 transition duration-300"
          >
            Resume
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-lg text-black dark:text-gray-300 hover:text-gray-300 dark:hover:text-white focus:outline-none transition duration-300"
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-md">
          <ul className="py-4 px-8">
            <li>
              <a
                href="https://drive.google.com/file/d/13c05qrNdjCBXko6Z7nMIeYy7Nj9SoR5T/view"
                target="_blank"
                rel="noopener noreferrer"
                download="AngelicaResume2024.pdf"
                className="text-sm md:text-base lg:text-lg px-3 py-2 rounded-md font-semibold text-rose-600 hover:text-rose-300 transition duration-300 block"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1ReJTCr6PNa2G3OkwQMjPtQ07BUCHDPqN/view"
                target="_blank"
                rel="noopener noreferrer"
                download="AngelicaPortfolio2024.pdf"
                className="text-sm md:text-base lg:text-lg px-3 py-2 rounded-md font-semibold text-rose-600 hover:text-rose-300 transition duration-300 block"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://gelzaragoza.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base lg:text-lg px-3 py-2 font-semibold text-rose-600 hover:text-rose-300  transition duration-300 block"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
