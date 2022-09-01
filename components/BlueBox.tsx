import Link from "next/link";
import { PostType } from "pages";

type BlueBoxPropType = {
  posts: PostType[];
};

const BlueBox = ({ posts }: BlueBoxPropType) => {
  return (
    <nav className="bg-blue-500 text-white p-8 grid grid-cols-3 gap-x-4">
      <div>
        <p className="font-semibold mb-4">POPULAR POSTS</p>

        {posts.map((post) => (
          <Link key={"bluebox-post-" + post.id} href={"/post/" + post.id}>
            <a className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm">
              {post.title}
            </a>
          </Link>
        ))}
      </div>

      <div>
        <p className="font-semibold mb-4">CATEGORIES</p>

        {["Text", "Image", "Video"].map((cat) => (
          <a
            key={"bluebox-cat-" + cat}
            href="#"
            className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BlueBox;
