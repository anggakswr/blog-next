import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  // "/admin/post"
  const { asPath } = useRouter();

  // "/admin/post/add"
  const addBtnUrl = asPath + "/add";

  return (
    <div className="box-between">
      {/* add btn */}
      <Link href={addBtnUrl}>
        <a className="admin-btn">Add New</a>
      </Link>

      {/* search box */}
      <div className="box-equal gap-x-2">
        <input type="text" className="admin-input" placeholder="Search" />
        <button className="admin-btn">Search</button>
      </div>
    </div>
  );
};

export default Header;
