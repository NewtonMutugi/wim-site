function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow light:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-row justify-center sm:flex sm:items-center sm:justify-center">
          <a
            href="#"
            className="flex items-center  mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/pictures/wim-logo.png"
              className="h-8"
              alt="WiM logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
              Women in the Marketplace
            </span>
          </a>
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 light:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto light:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center light:text-gray-400">
          © 2023{' '}
          <a href="#" className="hover:underline">
            Women in the Marketplace
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;