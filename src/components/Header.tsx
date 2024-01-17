const Header = ({ search }: { search: any }) => {
  return (
    <nav className="fixed top-0 h-16 z-10 bg-zinc-200 w-full flex items-center justify-center">
      <div className="flex space-x-3 w-3/4 md:w-3/4 mx-auto items-center justify-center">
        <input
          type="text"
          id="search"
          className="border-2 rounded-md w-full pl-2 pb-1 h-12"
          onChange={(eo) => {
            search(eo.target.value);
          }}
        />
        <label htmlFor="search" className="cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Header;
