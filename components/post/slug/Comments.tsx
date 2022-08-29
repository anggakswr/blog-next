import Comment from "./comments/Comment";

const Comments = () => {
  return (
    <section>
      <h2 className="mb-8 font-bold">7 Comments:</h2>

      {/* comment */}
      <Comment />
      <Comment />
    </section>
  );
};

export default Comments;
