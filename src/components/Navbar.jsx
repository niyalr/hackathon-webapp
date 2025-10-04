import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Hackthon
        </div>
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Landing
          </Link>
          <Link 
            to="/dashboard" 
            className="text-white hover:text-green-400 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link 
            to="/detail" 
            className="text-white hover:text-purple-400 transition-colors duration-200"
          >
            Detail
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
