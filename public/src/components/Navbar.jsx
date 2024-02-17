import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-white border-gray-200 light:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/src/assets/pictures/wim-logo.png" className="h-16" alt="WiM logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            Women in the
            <br /> Marketplace
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 light:text-white md:light:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
                aria-current="page"
              >
                About Us
              </Link>
            </li>
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
              >
                Pictorial
              </a>
            </li> */}

            <li>
              <a
                to="/Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent"
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
