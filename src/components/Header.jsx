export const Header = () => (
  <header>
    <nav className="fixed w-full z-20 top-0 start-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/logo-residuum.png" alt="Logo residuum" className="logo" />

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              src="/brasil.png"
              alt="Bandeira do Brasil"
              className="h-3.5 w-3.5 rounded-full me-2"
            />
            Brasil (BR)
          </button>
          {/* Dropdown */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src="/brasil.png"
                      alt="Bandeira do Brasil"
                      className="h-3.5 w-3.5 rounded-full me-2"
                    />
                    Brasil (BR)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src="/estados-unidos.png"
                      alt="Bandeira do Brasil"
                      className="h-3.5 w-3.5 rounded-full me-2"
                    />
                    English (US)
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src="/alemanha.png"
                      alt="Bandeira do Brasil"
                      className="h-3.5 w-3.5 rounded-full me-2"
                    />
                    Deutsch
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src="/italia.png"
                      alt="Bandeira do Brasil"
                      className="h-3.5 w-3.5 rounded-full me-2"
                    />
                    Italiano
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src="/china.png"
                      alt="Bandeira do Brasil"
                      className="h-3.5 w-3.5 rounded-full me-2"
                    />
                    中文 (繁體)
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
