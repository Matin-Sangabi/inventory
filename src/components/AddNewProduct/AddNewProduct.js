const AddNewProduct = () => {
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-slate-200 text-xl font-semibold">Add New Product</h1>
      <div className="w-full bg-slate-700 p-4  rounded-2xl">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Title</span>
            <input
              type="text"
              className="bg-transparent  rounded-md text-slate-100 ring-1 w-1/2 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add new Title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Quantity</span>
            <input
              type="number"
              className="bg-transparent  rounded-md ring-1 w-1/2 text-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add Quantity"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Categorie</span>
            <select className=" p-2 bg-slate-700 ring-1 ring-slate-400 rounded-md text-slate-300 border-none outline-none focus:ring-2 focus:ring-blue-700">
                <option value="">Select Categorie</option>
                <option value="">Cat#1</option>
                <option value="">Cat#2</option>
                <option value="">Cat#3</option>
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-slate-600 text-slate-100 rounded-md border-none outline-none ring-0 ring-slate-600 focus:ring-2  focus:ring-blue-700">Add New Product</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewProduct;
