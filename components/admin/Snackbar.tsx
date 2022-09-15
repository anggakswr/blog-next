import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSnackbar, currentSnackbar } from "slices/snackbarSlice";

const Snackbar = () => {
  // global state
  const snackbar = useSelector(currentSnackbar);
  const dispatch = useDispatch();

  const className =
    "fixed bottom-8 bg-green-700 text-white py-2 px-4 rounded-md box-between gap-x-8 shadow-xl";

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        dispatch(setSnackbar(""));
      }, 5000);
    }
  }, [dispatch, snackbar]);

  return (
    <div className={`${className} ${snackbar ? "right-8" : "right-[9999px]"} `}>
      <p>{snackbar}</p>

      <button
        className="bg-green-800 rounded-full w-8 h-8 box-center"
        onClick={() => dispatch(setSnackbar(""))}
      >
        &times;
      </button>
    </div>
  );
};

export default Snackbar;
