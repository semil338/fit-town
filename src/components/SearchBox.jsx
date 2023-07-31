const SearchBox = () => {
  return (
    <div id="exercises">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl py-5 text-center">
          Awesome Exercise You Should Know
        </h2>
        <div className="flex items-center justify-center max-w-[800px] w-full">
          <div className="relative mt-2 rounded-md shadow-sm w-full max-w-[600px] ">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-3 sm:pl-7 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 "
              placeholder="Search Exercises"
            />
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <button
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-gray-700 px-3 sm:px-5 text-white focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
