import { useEffect, useState } from "react";
import AddNewCategorie from "./components/AddNewCategorie/AddNewCategorie";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import ProductList from "./components/productList/productList";
const Wrapper = () => {
  const [categorieList, setCategorieList] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    setProductSearch(newProduct);
  }, [newProduct]);

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
  const deleteProducts = (productId) => {
    const FilterProducts = newProduct.filter((p) => p.id !== productId);
    setNewProduct(FilterProducts);
  };
  const sortHandler = ({ target }) => {
    let sortedProducts = [...productSearch];
    const sort = target.value;
    sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAd) > new Date(b.createdAd) ? -1 : 1;
      } else {
        return new Date(a.createdAd) > new Date(b.createdAd) ? 1 : -1;
      }
    });
    setProductSearch(sortedProducts)
  };
  const searchHandler = ({ target }) => {
    const search = target.value.trim().toLowerCase();
    const filterProducts = newProduct.filter((p) =>
      p.title.toLowerCase().includes(search)
    );
    setProductSearch(filterProducts);
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
            <FilterProducts
              categorie={categorieList}
              sortHandler={sortHandler}
              searchHandler={searchHandler}
            />
            <ProductList
              products={productSearch}
              deleteProduct={deleteProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
