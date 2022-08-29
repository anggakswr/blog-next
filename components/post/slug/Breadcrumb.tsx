import Link from "next/link";

const Breadcrumb = () => {
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

      <p>Judul Post</p>
    </nav>
  );
};

export default Breadcrumb;
