import { BiBookmark } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-white text-2xl font-bold px-[3rem]">LOGO</div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to={"/store"} className="text-gray-300 hover:text-white">
            Store
          </Link>

          <Link
            to={"/bookmark"}
            className="flex items-center text-gray-300 hover:text-white"
          >
            Bookmark
            <BiBookmark className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <div className="text-gray-300 hover:text-white px-[3rem]">
          <Link to={"/"}>
            <FaRegUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
