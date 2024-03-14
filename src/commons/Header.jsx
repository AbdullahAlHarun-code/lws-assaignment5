import Logo from "../assets/logo.svg";
import iconSearch from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import Logout from "../components/auth/Logout";
import { useAuth } from "../hooks/useAuth";
import { textCapitalize } from "../utills/TextFormat";
import { useProfile } from "../hooks/useProfile";
export default function Header() {
  const { auth } = useAuth();
  const { state } = useProfile();
  const user = state?.user ? state.user : auth.user;
  return (
    <>
      <header>
        <nav className="container">
          <div>
            <Link to="/">
              <img className="w-32" src={Logo} alt="lws" />
            </Link>
          </div>

          <div>
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  to={auth.user ? "/createBlog" : "/login"}
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Write
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img src={iconSearch} alt="Search" />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                {auth.user ? (
                  <li>
                    <Logout />
                  </li>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-white/50 hover:text-white transition-all duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="p-3 text-white/50 hover:text-white transition-all duration-200"
                    >
                      Register
                    </Link>
                  </>
                )}
              </li>

              {auth.user && (
                <li className="flex items-center">
                  <div className="avater-img bg-orange-600 text-white">
                    <span className="">
                      {auth.user.avatar ? (
                        <img
                          src={`${
                            import.meta.env.VITE_SERVER_BASE_URL
                          }/uploads/avatar/${user.avatar}`}
                        />
                      ) : (
                        `${auth.user.lastName[0].toUpperCase()}`
                      )}
                    </span>
                  </div>
                  <Link to="/profile">
                    <span className="text-white ml-2">
                      {textCapitalize(auth.user.firstName)}{" "}
                      {textCapitalize(auth.user.lastName)}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
