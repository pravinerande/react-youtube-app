import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/store/sidebarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const dispatch = useDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const getSearchSuggestions = async () => {
    // API Call to get Search Suggestions
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSearchSuggestions(data[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="col-span-12 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center w-full h-16 bg-white shadow-lg">
        <div className="flex items-center">
          <img
            alt="hamburger-icon"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
            className="h-6 w-6 m-2 "
            onClick={toggleSidebarHandler}
          />
          <img
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            className="h-8 w-[150px] m-2"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 rounded-l-full px-4 py-2 w-96 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-100 border border-gray-400 text-gray-500 rounded-r-full px-4 py-2">
            🔍 Search
          </button>
          {searchSuggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-400 w-96 mt-1 rounded-lg shadow-lg text-left">
              {searchSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <img
            alt="user-icon"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="h-8 w-8 m-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
