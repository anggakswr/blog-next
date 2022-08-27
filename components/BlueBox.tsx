const BlueBox = () => {
  return (
    <nav className="bg-blue-500 text-white p-8 grid grid-cols-3 gap-x-4">
      <div>
        <p className="font-semibold mb-4">POPULAR POSTS</p>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </a>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </a>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </a>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </a>
      </div>

      <div>
        <p className="font-semibold mb-4">CATEGORIES</p>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Text
        </a>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Image
        </a>

        <a
          href="#"
          className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
        >
          Video
        </a>
      </div>
    </nav>
  );
};

export default BlueBox;
