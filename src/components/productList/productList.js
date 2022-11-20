const ProductList = ({ products , deleteProduct }) => {
  return (
    <section className="flex flex-col gap-2 flex-1 mb-20">
      <h1 className="block text-slate-300 font-bold border-b-2 border-slate-400 text-xl">
        ProductList
      </h1>
      <div className="w-full flex flex-col gap-y-4 pt-3 px-2 overflow-x-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full flex flex-col lg:flex-row gap-y-2 mb-4 text-slate-300 lg:items-center lg:justify-between "
          >
            <span>{product.title}</span>
            <div className="flex items-center gap-x-4">
              <span>
                {new Date(product.createdAd).toLocaleDateString("fa-IR")}
              </span>
              <span className={` h-8 flex items-center justify-center p-2 ${product.selectCategorie.length > 20 ? 'text-xs ' : 'text-sm'} rounded-2xl ring-1 ring-slate-300`}>
                {product.selectCategorie}
              </span>
              <span className="w-8 h-8 bg-slate-500 flex items-center justify-center text-slate-100 rounded-full ring-2 ring-slate-100">
                {product.quantity}
              </span>
              <button
                type="button"
                onClick={() => deleteProduct(product.id)}
                className="w-16 h-8 flex items-center justify-center  ring-1 ring-rose-700 rounded-2xl text-sm text-rose-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
