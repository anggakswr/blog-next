const Sidebar = () => {
  return (
    <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4">
      {/* title */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />

        <span className="font-semibold">FEATURED POST</span>
      </div>

      {/* featured post */}
      <a
        href="#"
        className="text-lg font-semibold hover:text-red-500 hover:underline"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </a>

      {/* img */}
      <div className="bg-gray-300 text-gray-500 text-lg box-center h-[150px] mt-4 mb-8">
        img
      </div>

      {/* title */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />

        <span className="font-semibold">POPULAR POSTS</span>
      </div>

      {/* posts */}
      <a
        href="#"
        className="pb-2 border-b border-gray-200 mb-2 hover:text-red-500 hover:underline block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing
      </a>

      <a
        href="#"
        className="pb-2 border-b border-gray-200 mb-2 hover:text-red-500 hover:underline block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing
      </a>

      <a
        href="#"
        className="pb-2 border-b border-gray-200 mb-2 hover:text-red-500 hover:underline block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing
      </a>

      <a
        href="#"
        className="pb-2 border-b border-gray-200 mb-2 hover:text-red-500 hover:underline block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing
      </a>

      {/* title */}
      <div className="box-equal gap-x-2 mt-8 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />

        <span className="font-semibold">CATEGORIES</span>
      </div>

      <a
        href="#"
        className="inline-block mr-2 text-sm bg-gray-200 hover:underline p-1 text-gray-700"
      >
        Text
      </a>

      <a
        href="#"
        className="inline-block mr-2 text-sm bg-gray-200 hover:underline p-1 text-gray-700"
      >
        Image
      </a>

      <a
        href="#"
        className="inline-block mr-2 text-sm bg-gray-200 hover:underline p-1 text-gray-700"
      >
        Video
      </a>
    </nav>
  );
};

export default Sidebar;
