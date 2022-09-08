import Link from "next/link";

type HeaderPropType = {
  addBtnUrl: string;
};

const Header = ({ addBtnUrl }: HeaderPropType) => {
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
