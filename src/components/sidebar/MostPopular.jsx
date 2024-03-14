import { useEffect, useReducer } from "react";
import {
  initialState,
  mostPostReducer,
} from "../../reducers/MostPopularPostReducer";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";
import { getFullName } from "../../utills/TextFormat";
import { Link } from "react-router-dom";

export default function MostPopular() {
  const [state, dispatch] = useReducer(mostPostReducer, initialState);
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.popularPost.POPULAR_DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular`
        );
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          console.log("yes");

          dispatch({
            type: actions.popularPost.POPULAR_DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.popularPost.POPULAR_DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchPost();
  }, []);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }

  return (
    <>
      <div className="sidebar-card">
        <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
          Most Popular 👍️
        </h3>

        <ul className="space-y-5 my-5">
          {state.posts.map((post) => (
            <>
              <li>
                <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  by
                  <Link to="/profile">{getFullName(post)}</Link>
                  <span>·</span> {post.likes.length} Likes
                </p>
              </li>
            </>
          ))}

          
        </ul>
      </div>
    </>
  );
}
