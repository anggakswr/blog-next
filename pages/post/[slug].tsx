import Breadcrumb from "components/post/slug/Breadcrumb";
import RelatedPosts from "components/post/slug/RelatedPosts";
import ShareBtns from "components/post/slug/ShareBtns";
import type { NextPage } from "next";

const DetailPost: NextPage = () => {
  return (
    <>
      <Breadcrumb />

      {/* title */}
      <h1 className="text-2xl font-bold my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur vel
        fugiat dolorum, similique debitis nihil.
      </h1>

      {/* date */}
      <p className="text-sm text-gray-400 border-b border-gray-300 pb-2 mb-6">
        May 13, 2020
      </p>

      {/* content */}
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
          doloribus veniam magnam mollitia necessitatibus cupiditate eos, et at
          explicabo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
          dicta iure pariatur qui! Molestiae modi placeat ea iusto, consectetur
          porro alias beatae minus fuga aspernatur voluptatum tenetur non,
          accusantium tempora vitae, consequatur nulla fugit? Itaque inventore
          vel error nulla. Quia ipsum sed porro vel laboriosam consequatur
          molestiae, iste ipsa.
        </p>
      </article>

      {/* share btns */}
      <ShareBtns />

      {/* related posts */}
      <RelatedPosts />
    </>
  );
};

export default DetailPost;
