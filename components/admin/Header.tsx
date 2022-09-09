import pathToTitle from "helpers/pathToTitle";
import { useRouter } from "next/router";
import { FaChevronDown, FaFolder, FaUser } from "react-icons/fa";

const Header = () => {
  // /admin/post /admin/category
  const { asPath } = useRouter();
  const title = pathToTitle(asPath);

  return (
    <header className="bg-blue-500 text-white flex fixed top-0 inset-x-0">
      {/* sidebar title */}
      <p className="w-[300px] bg-blue-700 p-4 box-equal gap-x-4 font-bold">
        <FaFolder color="white" />
        Blognya Angga CMS
      </p>

      {/* page header */}
      <nav className="p-4 box-between flex-1">
        {/* page title */}
        <h1 className="text-sm">{title}</h1>

        {/* icon user */}
        <button className="box-equal gap-x-4">
          <FaUser color="white" />
          Angga
          <FaChevronDown color="white" size={10} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
