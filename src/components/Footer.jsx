export const Footer = () => (
  <footer>
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="flex text-center items-center">
        <img
          src="/heineken-14-logo-svgrepo-com.svg"
          className="h-20 text-center"
          alt="Heineken Logo"
        />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pl-8">
          © 2024
          <a href="" className="hover:underline">
            Residuum™
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </div>
  </footer>
);
