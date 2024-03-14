import { useEffect, useReducer } from "react";
import useAxios from "../../hooks/useAxios";
import {
  initialState,
  favouritePostReducer,
} from "../../reducers/MostFavouriteReducer";
import { actions } from "../../actions";
import { addHashTags } from "../../utills/TextFormat";

export default function MostFavourite() {
  const [state, dispatch] = useReducer(favouritePostReducer, initialState);
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.favouritePost.FAVOURITE_DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
        );
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          console.log("yes");

          dispatch({
            type: actions.favouritePost.FAVOURITE_DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.favouritePost.FAVOURITE_DATA_FETCH_ERROR,
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
          Your Favourites ❤️
        </h3>

        <ul className="space-y-5 my-5">
          {state.posts.length > 0 ? (
            <ul>
              {state.posts.map((post, index) => (
                <li key={index}>
                  <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {addHashTags(post.tags)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No favourite blogs!</p>
          )}
        </ul>
      </div>
    </>
  );
}
