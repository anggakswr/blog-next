import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSnackbar, currentSnackbar } from "slices/snackbarSlice";

const Snackbar = () => {
  // global state
  const snackbar = useSelector(currentSnackbar);
  const dispatch = useDispatch();

  const className = `fixed bottom-8 ${
    snackbar?.type === "success" ? "bg-green-700" : "bg-red-700"
  } text-white py-2 px-4 rounded-md box-between gap-x-8 shadow-xl`;

  const btnClassName = `${
    snackbar?.type === "success" ? "bg-green-800" : "bg-red-800"
  } rounded-full w-8 h-8 box-center hover:bg-gray-500`;

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        dispatch(setSnackbar(null));
      }, 5000);
    }
  }, [dispatch, snackbar]);

  return (
    <div className={`${className} ${snackbar ? "right-8" : "right-[9999px]"} `}>
      <p>{snackbar?.text}</p>

      <button
        className={btnClassName}
        onClick={() => dispatch(setSnackbar(null))}
      >
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
