import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import auth from "../../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./Navbar.css";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("winter");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const textClass = theme === "dark" ? "text-white" : "";

  useEffect(() => {
    if (user) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log(currentUser);
          if (currentUser.displayName) {
            setUserName(currentUser.displayName);
          }
        }
        setIsLoading(false);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log();
        Swal.fire("user Logged Out");
      })
      .catch((error) => console.log(error));
  };
  const navBar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-[120px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={`btn  text-xl lg:hidden ${textClass}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/">
            <a
              className={`btn btn-ghost normal-case text-3xl font-bold ${textClass}`}
            >
              EShop
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-4 ${textClass}`}>{navBar}</ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="">
          {user ? (
            <>
              <span className="flex flex-col pr-6">
                <p className={` text-sm ${textClass}`}>{user.email}</p>{" "}
                <p className={` font-bold ${textClass}`}>{userName}</p>{" "}
              </span>
            </>
          ) : (
            <Link to="/register">
              <div className="flex">
                <button className="btn  btn-neutral text-white">
                  register
                  <BiLogOutCircle className="text-2xl text-white" />
                </button>
              </div>
            </Link>
          )}
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-white text-2xl"
            >
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "winter" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
