const ProductList = () => {
  return (
    <section className="flex flex-col gap-2 flex-1 mb-20">
      <h1 className="block text-slate-300 font-bold border-b-2 border-slate-400 text-xl">
        ProductList
      </h1>
      <div className="w-full flex flex-col gap-y-4 pt-3 px-2">
        <div className="w-full flex text-slate-300 items-center justify-between ">
            <span>Product Name</span>
            <div className="flex items-center gap-x-4">
                <span>Product Date</span>
                <span  className="w-20 h-8 flex items-center justify-center  text-sm rounded-2xl ring-1 ring-slate-300">Categorie</span>
                <span className="w-8 h-8 bg-slate-500 flex items-center justify-center text-slate-100 rounded-full ring-2 ring-slate-100">20</span>
                <button type="button" className="w-16 h-8 flex items-center justify-center  ring-1 ring-rose-700 rounded-2xl text-sm text-rose-700">Delete</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
