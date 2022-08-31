import limitChar from "helpers/limitChar";
import Link from "next/link";

type BreadcrumbPropType = {
  title: string;
};

const Breadcrumb = ({ title }: BreadcrumbPropType) => {
  return (
    <nav className="box-equal gap-x-2 text-sm text-gray-500">
      <Link href="/">
        <a className="hover:text-blue-500">Home</a>
      </Link>

      <span>&rsaquo;</span>

      <Link href="/post">
        <a className="hover:text-blue-500">Post</a>
      </Link>

      <span>&rsaquo;</span>

      <p>{limitChar(title, 20)}</p>
    </nav>
  );
};

export default Breadcrumb;
