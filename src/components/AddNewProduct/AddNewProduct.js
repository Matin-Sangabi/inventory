import { useState } from "react";

const AddNewProduct = ({ categorie, product }) => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: "",
    selectCategorie: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      productFormData.title !== 0 &&
      productFormData.quantity !== 0 &&
      productFormData.selectCategorie !== 0
    ) {
      product(productFormData);
      setProductFormData({title :"" , quantity : '' , selectCategorie : ''})
    }
  };
  const changeProductFormHandler = ({ target }) => {
    const { name, value } = target;
    setProductFormData({ ...productFormData, [name]: value });
  };
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-slate-200 text-xl font-semibold">Add New Product</h1>
      <div className="w-full bg-slate-700 p-4  rounded-2xl">
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Title</span>
            <input
              type="text"
              name="title"
              value={productFormData.title}
              onChange={changeProductFormHandler}
              className="bg-transparent  rounded-md text-slate-100 ring-1 w-1/2 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add new Title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Quantity</span>
            <input
              type="number"
              name="quantity"
              value={productFormData.quantity}
              onChange={changeProductFormHandler}
              className="bg-transparent  rounded-md ring-1 w-1/2 text-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add Quantity"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Categorie</span>
            <select
              name="selectCategorie"
              value={productFormData.selectCategorie}
              onChange={changeProductFormHandler}
              className=" p-2 bg-slate-700 ring-1 ring-slate-400 rounded-md text-slate-300 border-none outline-none focus:ring-2 focus:ring-blue-700"
            >
              <option value="">Select Categorie</option>
              {categorie.map((cat, i) => (
                <option key={i} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-slate-600 text-slate-100 rounded-md border-none outline-none ring-0 ring-slate-600 focus:ring-2  focus:ring-blue-700"
          >
            Add New Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNewProduct;
