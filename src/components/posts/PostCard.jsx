import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { dateFormat, getFullName } from "../../utills/TextFormat";
import ActionPost from "./ActionPost";

export default function PostCard({post}) {
  const {auth} = useAuth()
  return (
    <>
      <div className="blog-card">
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${post.thumbnail}`}
          alt=""
        />
        <div className="mt-2 relative">
          <Link to={`/single-blog/${post.id}`}>
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              <Link to={`/single-blog/${post.id}`}>{post.title}</Link>
            </h3>
          </Link>
          <p className="mb-6 text-base text-slate-500 mt-1">
            {post.content}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">
                  <img src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${post.author.avatar}`} />
                  
                </span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  <a href="./profile.html">{getFullName(post)}</a>
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>{dateFormat(post.createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>{post.likes.length} Likes</span>
            </div>
          </div>
          {
            (auth.id === post.author.id) &&(
              <ActionPost />
            )
          }
          
        </div>
      </div>
    </>
  );
}
