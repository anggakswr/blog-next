const Snackbar = () => {
  return (
    <div className="fixed bottom-8 right-8 bg-green-700 text-white p-2 rounded-md box-between gap-x-8">
      <p>Data added</p>

      <button>&times;</button>
    </div>
  );
};

export default Snackbar;
