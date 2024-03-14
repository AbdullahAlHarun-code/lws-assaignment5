import PostCard from "./PostCard";
export default function AllPosts({posts}) {
  
  return (
    <>
      <div className="space-y-3 md:col-span-5">
        
        
        {posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}

        
      </div>
    </>
  );
}
