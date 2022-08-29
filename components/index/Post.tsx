import limitChar from "helpers/limitChar";
import Link from "next/link";
import { PostType } from "pages/index";

type PostPropType = {
  post: PostType;
};

const Post = ({ post }: PostPropType) => {
  return (
    <div className="box-equal gap-x-4 mb-8">
      {/* img */}
      <div className="bg-gray-300 text-gray-500 text-lg box-center w-[200px] h-[130px] min-w-[200px] min-h-[130px] max-w-[200px] max-h-[130px]">
        img
      </div>

      {/* texts */}
      <div>
        {/* category & date */}
        <small className="flex gap-x-2 text-gray-700">
          <a href="#" className="text-red-500 hover:underline">
            Video
          </a>
          | <span>May 13, 2022</span>
        </small>

        {/* title (link) */}
        <Link href={"/post/" + post.id}>
          <a className="text-xl font-semibold block my-2 hover:text-blue-500">
            {limitChar(post.title, 40)}
          </a>
        </Link>

        {/* desc */}
        <p className="text-gray-500 text-sm">{limitChar(post.body, 100)}</p>
      </div>
    </div>
  );
};

export default Post;
