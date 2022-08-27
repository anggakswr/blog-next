const Post = () => {
  return (
    <div className="box-equal gap-x-4 mb-8">
      {/* img */}
      <div className="bg-gray-300 text-gray-500 text-lg box-center w-[200px] h-[130px] min-w-[200px] min-h-[130px] max-w-[200px] max-h-[130px]">
        img
      </div>

      {/* texts */}
      <div>
        {/* category & date */}
        <small className="flex gap-x-2 text-gray-700">
          <a href="#" className="text-red-500 hover:underline">
            Video
          </a>
          | <span>May 13, 2022</span>
        </small>

        {/* title (link) */}
        <a
          href="#"
          className="text-xl font-semibold block my-2 hover:text-blue-500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing
        </a>

        {/* desc */}
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nesciunt magnam asperiores magni cumque nostrum?
        </p>
      </div>
    </div>
  );
};

export default Post;
