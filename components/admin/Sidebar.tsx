import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft, FaNewspaper, FaTags } from "react-icons/fa";

const links = [
  { href: "/", text: "Back to site", icon: <FaArrowLeft color="lightgray" /> },
  {
    href: "/admin/post",
    text: "Post",
    icon: <FaNewspaper color="lightgray" />,
  },
  {
    href: "/admin/category",
    text: "Category",
    icon: <FaTags color="lightgray" />,
  },
];

const Sidebar = () => {
  const { route } = useRouter();

  const renderLinkClass = (url: string) => {
    const defaultClass =
      "px-8 py-2 hover:bg-white hover:text-black box-equal gap-x-4";

    if (url === route) {
      return "px-8 py-2 bg-white text-black box-equal gap-x-4";
    } else {
      return defaultClass;
    }
  };

  return (
    <nav className="w-[300px] text-white bg-gray-500">
      {links.map((link) => (
        <Link key={"sidebar-link-" + link.href} href={link.href}>
          <a className={renderLinkClass(link.href)}>
            {link.icon}
            {link.text}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
