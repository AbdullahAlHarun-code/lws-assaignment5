import PostCard from "./PostCard";
import videoBlog from "../../assets/blogs/Underrated Video.jpg"
export default function AllPosts() {
  return (
    <>
      <div className="space-y-3 md:col-span-5">
        <PostCard />

        <div className="blog-card">
          <img
            className="blog-thumb"
            src={videoBlog}
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              <a href="./single-blog.html">React Fetch API</a>
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
                  <h5 className="text-slate-500 text-sm">
                    <a href="./profile.html">Saad Hasan</a>
                  </h5>
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

        <div className="blog-card">
          <img
            className="blog-thumb"
            src="./assets/blogs/taiulwind-cn-thumb.jpg"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              Style your components with TailwindCSS
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
                  <h5 className="text-slate-500 text-sm">
                    <a href="./profile.html">Saad Hasan</a>
                  </h5>
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

        <div className="blog-card">
          <img
            className="blog-thumb"
            src="./assets/blogs/React-Roadmap.jpg"
            alt=""
          />
          <div className="mt-2">
            <a href="./single-blog.html">
              <h3 className="text-slate-300 text-xl lg:text-2xl">
                React Roadmap in 2024
              </h3>
            </a>
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
                  <h5 className="text-slate-500 text-sm">
                    <a href="./profile.html">Saad Hasan</a>
                  </h5>
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
                  <h5 className="text-slate-500 text-sm">
                    <a href="./profile.html">Saad Hasan</a>
                  </h5>
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

        <div className="blog-card">
          <img
            className="blog-thumb"
            src="./assets/blogs/taiulwind-cn-thumb.jpg"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              Style your components with TailwindCSS
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
                  <h5 className="text-slate-500 text-sm">
                    <a href="./profile.html">Saad Hasan</a>
                  </h5>
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
      </div>
    </>
  );
}