import { Link } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { initialState, profileReducer } from "../../reducers/ProfileReducer";
import { useAuth } from "../../hooks/useAuth";
export default function Myblogs() {
  const { auth } = useAuth();
  const { state } = useProfile();
  const user = auth.user ? auth.user : state.user;
  console.log(user)
  console.log(state.blogs)
  return (
    <>
      {(user) ? (
        <div className="blog-card">
          <img
            className="blog-thumb"
            src="./assets/blogs/Underrated Video.jpg"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              React Fetch API
            </h3>
            <p className="mb-6 text-base text-slate-500 mt-1">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center capitalize space-x-2">
                <div className="avater-img bg-indigo-600 text-white">
                  <span className="">S</span>
                </div>

                <div>
                  <h5 className="text-slate-500 text-sm">Saad Hasan</h5>
                  <div className="flex items-center text-xs text-slate-700">
                    <span>June 28, 2018</span>
                  </div>
                </div>
              </div>

              <div className="text-sm px-2 py-1 text-slate-700">
                <span>100 Likes</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="blog-card">
          
          <p>No blogs found!</p>
          <Link
            to="/createBlog"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Create Blog
          </Link>
        </div>
      )}
    </>
  );
}
