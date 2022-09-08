import upperCaseFirstLetter from "helpers/upperCaseFirstLetter";
import { useRouter } from "next/router";
import { FaFolder } from "react-icons/fa";

const Header = () => {
  // /admin/post /admin/category
  const { asPath } = useRouter();

  // post category angga-keren
  const pathTruncated = asPath.replace("/admin/", "");

  // ['angga', 'keren']
  const pathArr = pathTruncated.split("-");

  // ['Angga', 'Keren'] -> Angga Keren
  const arrJoined = pathArr.map((str) => upperCaseFirstLetter(str)).join(" ");

  // const title = upperCaseFirstLetter(pathTruncated);

  return (
    <header className="bg-blue-500 text-white flex">
      {/* sidebar title */}
      <p className="w-[300px] bg-blue-700 p-4 box-equal gap-x-4 font-bold">
        <FaFolder color="white" />
        Blognya Angga CMS
      </p>

      {/* page header */}
      <nav className="p-4 box-between flex-1">
        {/* page title */}
        <h1>{arrJoined}</h1>

        {/* icon user */}
        <p>icon user</p>
      </nav>
    </header>
  );
};

export default Header;
