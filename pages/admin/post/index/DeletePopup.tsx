type DeletePopupPropType = {
  postId: number;
  setPostId: (postId: number | null) => void;
};

const DeletePopup = ({ postId, setPostId }: DeletePopupPropType) => {
  return (
    <div className="fixed inset-0 box-center">
      {/* content */}
      <div className="relative z-10 rounded-md bg-white w-[400px] p-4">
        {/* title */}
        <p className="font-bold text-xl border-b pb-4">Warning!</p>

        {/* desc */}
        <p className="py-4 border-b pb-4 mb-4">
          Are you sure you want to delete?
        </p>

        {/* btns */}
        <div className="flex justify-end gap-x-4">
          <button className="admin-btn" onClick={() => setPostId(null)}>
            Cancel
          </button>

          <button className="admin-delete-btn">Confirm</button>
        </div>
      </div>

      {/* bg */}
      <div
        className="bg-black absolute inset-0 opacity-50"
        onClick={() => setPostId(null)}
      />
    </div>
  );
};

export default DeletePopup;
