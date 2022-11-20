import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
const AddNewCategorie = ({ categorie }) => {
  const [openCategorie, setOpenCategorie] = useState(false);
  const [categorieFormData, setCategorieFormData] = useState({
    title: "",
    desc: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (categorieFormData.title !== "" && categorieFormData.desc !== "") {
      categorie(categorieFormData);
      setCategorieFormData({ title: "", desc: "" });
    }else{
        console.log('error');
    }
  };
  const CancelCategorie = () => {
    setOpenCategorie(false);
    setCategorieFormData({ ...categorieFormData, title: "", desc: "" });
  };
  const CategorieForamDataHandler = ({ target }) => {
    const { name, value } = target;
    setCategorieFormData({ ...categorieFormData, [name]: value }); // [name] key of the object dynamic key
  };
  return (
    <section className="flex flex-col items-start px-2 w-full space-y-4 overflow-hidden relative">
      <div
        className={`bg-slate-700 p-2 rounded-lg w-full lg:w-2/3 transition-all ease-linear duration-500   ${
          openCategorie ? "translate-y-0 " : "translate-y-full absolute  z-0"
        }`}
      >
        <button
          className="w-full flex justify-end text-slate-200 "
          onClick={() => setOpenCategorie(false)}
        >
          <HiOutlineX />
        </button>
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Title</span>
            <input
              type="text"
              name="title"
              className="bg-transparent  rounded-md text-slate-100 ring-1 w-1/2 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add new Title"
              value={categorieFormData.title}
              onChange={CategorieForamDataHandler}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-slate-300">Categorie Desc</span>
            <textarea
              name="desc"
              className="bg-transparent  rounded-md ring-1 w-full resize-none text-slate-100 border-none outline-none focus:ring-2 focus:ring-blue-700 p-2 ring-slate-400"
              placeholder="Add Desc For Categorie"
              value={categorieFormData.desc}
              onChange={CategorieForamDataHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="button"
              className="w-full p-2 bg-transparent text-slate-100 rounded-md border-none outline-none ring-2 ring-slate-600 focus:ring-2  focus:ring-blue-700"
              onClick={CancelCategorie}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full p-3 lg:p-2 lg:text-base text-sm  bg-slate-600 text-slate-100 rounded-md border-none outline-none ring-0 ring-slate-600 focus:ring-2  focus:ring-blue-700"
            >
              Add New Categorie
            </button>
          </div>
        </form>
      </div>
      <button
        type="button"
        className="text-slate-500 text-sm font-semibold z-10"
        onClick={() => setOpenCategorie(true)}
      >
        Add New Categorie ?
      </button>
    </section>
  );
};

export default AddNewCategorie;
