const FilterProducts = () => {
  return (
    <section className="flex flex-col gap-2 flex-1 mb-12">
      <h1 className="block text-slate-400 font-bold border-b-2 border-slate-400">
        Filter
      </h1>
      <div className="flex flex-col gap-8 pt-4 px-2">
        <div className="w-full flex items-center justify-between">
          <span className="text-slate-400">Search</span>
          <input
            type="text"
            placeholder="Search Products"
            className="p-2 rounded-md ring-1 bg-transparent text-slate-200 ring-slate-400 border-none outline-none focus:ring-blue-700"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-slate-400">Sort</span>
          <select className=" p-2 bg-slate-900 ring-1 ring-slate-400 rounded-md text-slate-400 border-none outline-none focus:ring-2 focus:ring-blue-700">
            <option value="">Select Categorie</option>
            <option value="">Cat#1</option>
            <option value="">Cat#2</option>
            <option value="">Cat#3</option>
          </select>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-slate-400 ">Categorie</span>
          <select className=" p-2 bg-slate-900 w-32 ring-1 ring-slate-400 rounded-md text-slate-400 border-none outline-none focus:ring-2 focus:ring-blue-700">
            <option value="">All</option>
            <option value="">Cat#1</option>
            <option value="">Cat#2</option>
            <option value="">Cat#3</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterProducts;
