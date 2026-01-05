import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);

  if (!isMenuOpen) return null;

    return (
      <div className="col-span-2">
        <div className="sidebar-container fixed top-16 left-0 w-60 p-4 bg-gray-100 h-[calc(100vh-64px)] shadow-md text-left z-20">
        <ul className="mb-4">
          <Link to="/">
            <li className="mb-2">Home</li>
          </Link>
          <li className="mb-2">Trending</li>
          <li className="mb-2">Subscriptions</li>
          <li className="mb-2">Library</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Subscriptions</h4>
        <ul className="mb-4">
          <li className="mb-2">Channel 1</li>
          <li className="mb-2">Channel 2</li>
          <li className="mb-2">Channel 3</li>
          <li className="mb-2">Channel 4</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Categories</h4>
        <ul className="mb-4">
          <li className="mb-2">Music</li>
          <li className="mb-2">Sports</li>
          <li className="mb-2">News</li>
          <li className="mb-2">Entertainment</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
