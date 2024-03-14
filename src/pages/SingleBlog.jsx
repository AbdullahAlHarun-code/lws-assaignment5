import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useReducer } from "react";
import { initialState, SinglePostReducer } from "../reducers/SinglePostReducer";
import { actions } from "../actions";
import { dateFormat, getFullName } from "../utills/TextFormat";
export default function SingleBlog() {
  const { blogId } = useParams();
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(SinglePostReducer, initialState);
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogId}`
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
  console.log(state.post);
  return (
    <>
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">{state.post.tile}</h1>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">
                  {/* <img src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                state.post.author.avatar
              }`} /> */}
                </span>
              </div>
              <h5 className="text-slate-500 text-sm">
                {getFullName(state.post)}
              </h5>
            </div>
            <span className="text-sm text-slate-700 dot">
              {dateFormat(state.post.createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">
              {state.post.likes.length} Likes
            </span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src="./assets/blogs/React-Roadmap.jpg"
            alt=""
          />

          <ul className="tags">
            {state.post.tags
              .trim()
              .split(", ")
              .map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            
          </ul>

          <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
            {state.post.content}
          </div>
        </div>
      </section>

      <section id="comments">
        <div className="mx-auto w-full md:w-10/12 container">
          <h2 className="text-3xl font-bold my-8">Comments (3)</h2>
          <div className="flex items -center space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <textarea
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 my-8">
            <div className="avater-img bg-orange-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
              <p className="text-slate-300">
                Today I was mob programming with Square's Mobile & Performance
                Reliability team and we toyed with an interesting idea. Our
                codebase has classNamees that represent screens a user can
                navigate to. These classNamees are defined in modules, and these
                modules have an owner team defined. When navigating to a screen,
                we wanted to have the owner team information available, at
                runtime. We created a build tool that looks at about 1000 Screen
                classNamees, determines the owner team, and generates a
                className to do the lookup at runtime. The generated code looked
                like this:
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 my-8">
            <div className="avater-img bg-green-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
              <p className="text-slate-300">
                Today I was mob programming with Square's Mobile & Performance
                Reliability team and we toyed with an interesting idea. Our
                codebase has classNamees that represent screens a user can
                navigate to. These classNamees are defined in modules, and these
                modules have an owner team defined. When navigating to a screen,
                we wanted to have the owner team information available, at
                runtime. We created a build tool that looks at about 1000 Screen
                classNamees, determines the owner team, and generates a
                className to do the lookup at runtime. The generated code looked
                like this:
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 my-8">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>
            <div className="w-full">
              <h5 className="text-slate -500 font-bold">Saad Hasan</h5>
              <p className="text-slate-300">
                Today I was mob programming with Square's Mobile & Performance
                Reliability team and we toyed with an interesting idea. Our
                codebase has classNamees that represent screens a user can
                navigate to. These classNamees are defined in modules, and these
                modules have an owner team defined. When navigating to a screen,
                we wanted to have the owner team information available, at
                runtime. We created a build tool that looks at about 1000 Screen
                classNamees, determines the owner team, and generates a
                className to do the lookup at runtime. The generated code looked
                like this:
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
