import Link from "next/link";

const RelatedPosts = () => {
  return (
    <section className="pb-8 border-b border-gray-300 mb-8">
      <div className="box-equal gap-x-4 mb-4">
        <h2 className="text-lg font-bold">Related Posts</h2>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      <nav className="grid grid-cols-4 gap-x-3">
        {[1, 2, 3, 4].map((post) => (
          <Link key={"post-" + post} href="/post/moto-gp">
            <a>
              <div className="bg-gray-300 text-gray-500 box-center h-[100px] mb-2">
                img
              </div>

              {/* title */}
              <span className="text-sm text-gray-700 hover:underline hover:text-red-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </span>
            </a>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default RelatedPosts;
