const Navbar = () => {
  return (
    <nav className="box-between bg-gray-300">
      <div className="flex">
        <a href="#" className="p-4 hover:bg-black hover:text-white">
          Home
        </a>

        <a href="#" className="p-4 hover:bg-black hover:text-white">
          Text
        </a>

        <a href="#" className="p-4 hover:bg-black hover:text-white">
          Image
        </a>

        <a href="#" className="p-4 hover:bg-black hover:text-white">
          Video
        </a>
      </div>

      <form className="p-2" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search here" className="bg-white p-2" />
        <button className="bg-blue-500 text-white p-2">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
