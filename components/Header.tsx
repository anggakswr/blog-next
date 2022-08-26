const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white box-between">
      {/* texts */}
      <div>
        <p className="text-2xl font-bold">Blognya Angga</p>
        <p>Isinya tentang Angga</p>
      </div>

      {/* img / ads */}
      <div className="w-[468px] h-[60px] bg-gray-300 box-center">
        {/* <img src="" alt="" /> */}
        <p className="text-gray-500 text-xl">468 x 60 pixel</p>
      </div>
    </header>
  );
};

export default Header;
