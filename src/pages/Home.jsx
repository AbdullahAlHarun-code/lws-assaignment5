import AllPosts from "../components/posts/AllPosts";
import MostFavourite from "../components/sidebar/MostFavourite";
import MostPopular from "../components/sidebar/MostPopular";
import { useAuth } from "../hooks/useAuth";
import { initialState, postReducer } from "../reducers/PostReducer";

import useAxios from "../hooks/useAxios";
import { useEffect, useReducer } from "react";
import { actions } from "../actions";

export default function Home() {
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs?page=1`
        );
        
        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
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
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <AllPosts posts={state?.posts} />

        <div className="md:col-span-2 h-full w-full space-y-5">
          <MostPopular />

          <MostFavourite />
        </div>
      </div>
    </>
  );
}
