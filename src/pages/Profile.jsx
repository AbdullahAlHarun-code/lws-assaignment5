import { useEffect } from "react";
import { actions } from "../actions";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Myblogs from "../components/Profile/MyBlogs";

export default function Profile() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();
  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }
  
  return (
    <>
      <ProfileInfo />

      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
      <div className="my-6 space-y-4">
        <Myblogs />

      </div>
    </>
  );
}
