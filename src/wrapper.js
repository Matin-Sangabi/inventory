import { useState } from "react";
import AddNewCategorie from "./components/AddNewCategorie/AddNewCategorie";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import ProductList from "./components/productList/productList";
const Wrapper = () => {
  const [categorieList, setCategorieList] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const AddNewCategorieList = (categorie) => {
    setCategorieList([
      ...categorieList,
      { ...categorie, createdAd: new Date().toISOString() },
    ]);
  };
  const newProductList = (product) => {
    setNewProduct([
      ...newProduct,
      { ...product, id: Date.now(), createdAd: new Date().toISOString() },
    ]);
  };
  return (
    <div className="w-full h-full lg:h-screen bg-slate-900">
      <div className="max-w-screen-2xl mx-auto pt-20 px-4">
        <div className="flex flex-col lg:flex-row gap-x-12 lg:justify-between">
          <div className="flex flex-col w-full">
            <AddNewCategorie categorie={AddNewCategorieList} />
            <AddNewProduct categorie={categorieList} product={newProductList} />
          </div>
          <div className="flex flex-col w-full">
            <FilterProducts />
            <ProductList product={newProduct}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
