const Search = (props) => {
  return (
    <div className="flex rounded-md overflow-hidden my-2">
      <input
        type="text"
        className=" rounded-md rounded-r-none border-2 border-gray-300 w-96"
        placeholder="Search Certificate"
      ></input>
      <button
        className="bg-blue-400 text-white px-8 text-lg font-semibold py-1 rounded-r-md"
       
      >Search
        <i class="uil uil-search"></i>
      </button>
    </div>
  );
};

export default Search;
