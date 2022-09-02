const PostSkeleton = () => {
  return (
    <div className="box-equal gap-x-4 mb-8 animate-pulse">
      {/* img */}
      <div className="bg-gray-300 w-[200px] h-[130px] min-w-[200px] min-h-[130px] max-w-[200px] max-h-[130px]" />

      {/* texts */}
      <div className="flex-1">
        {/* category & date */}
        <div className="bg-gray-300 h-3 w-1/6 mb-4" />

        {/* title (link) */}
        <div className="bg-gray-300 h-6 mb-4" />

        {/* desc */}
        <div className="bg-gray-300 h-3 mb-4" />
        <div className="bg-gray-300 h-3 w-1/2 mb-4" />
      </div>
    </div>
  );
};

export default PostSkeleton;
