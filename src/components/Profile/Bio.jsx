import { useProfile } from "../../hooks/useProfile";
import editIcon from "../../assets/icons/edit.svg";
import checkIcon from "../../assets/icons/check.svg";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { actions } from "../../actions";
export default function Bio() {
    const { state, dispatch } = useProfile();
    const { api } = useAxios();
    const [bio, setBio] = useState(state?.user?.bio);
    const [editMode, setEditMode] = useState(false);
    const handleBioEdit = async () => {
        dispatch({ type: actions.profile.DATA_FETCHING });

        try {
            const response = await api.patch(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile
                `,
                { bio }
            );
            
            if (response.status === 200) {
                dispatch({
                    type: actions.profile.USER_DATA_EDITED,
                    data: response.data,
                });
            }
            setEditMode(false);
        } catch (err) {
            console.log(err)
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: err.message,
            });
        }
    };
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName} {state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
      </div>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
        {!editMode ? (
                    <p className="leading-[188%] text-gray-400 lg:text-lg">
                        {state?.user?.bio}
                    </p>
                ) : (
                    <textarea
                        className='p-2 rounded-md'
                        style={{color:'black'}} 
                        value={bio}
                        rows={4}
                        cols={55}
                        onChange={(e) => setBio(e.target.value)}
                    />
                )}

          
        </div>
        {!editMode ? (
                <button
                    className="flex-center h-7 w-7 rounded-full"
                    onClick={() => setEditMode(true)}
                >
                    <img src={editIcon} alt="Edit" />
                </button>
            ) : (
                <button
                    className="flex-center h-7 w-7 rounded-full"
                    onClick={handleBioEdit}
                >
                    <img src={checkIcon} alt="Check" />
                </button>
            )}
        
      </div>
    </>
  );
}
