import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="h-20 max-w-6xl flex items-center justify-between mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" alt="Site Logo" className="h-14" />
        </div>
      </NavLink>

      <div className="flex items-center gap-6 font-medium text-slate-100 mr-5">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaCartShopping className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-1 px-[4px] rounded-full text-xs bg-green-600 text-white animate-bounce">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
