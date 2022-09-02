import PostSkeleton from "./index/PostSkeleton";

const MainPageSkeleton = () => {
  return (
    <section className="flex-1 border-r border-gray-300 p-4">
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </section>
  );
};

export default MainPageSkeleton;
