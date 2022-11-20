import { useEffect, useState } from "react";
import AddNewCategorie from "./components/AddNewCategorie/AddNewCategorie";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import ProductList from "./components/productList/productList";
const Wrapper = () => {
  const [categorieList, setCategorieList] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [sortByCat , setSortByCat] = useState("");
  useEffect(() => {
    let resault = newProduct;
    resault = sortFilterProduct(resault);
    resault = searchFilterProducts(resault);
    resault = sortBycategorieFilterProducts(resault)
    setProductsFilter(resault);
  }, [newProduct, sort, search , sortByCat]);
  
  useEffect(() => {
    const saveProducts = JSON.parse(localStorage.getItem("products")) || [];
    const saveCategorie = JSON.parse(localStorage.getItem("categories")) || [];
    setNewProduct(saveProducts);
    setCategorieList(saveCategorie);
  }, []);

  useEffect(() => {
    if (newProduct.length) {
      localStorage.setItem("products", JSON.stringify(newProduct));
    }
  }, [newProduct]);

  useEffect(() => {
    if (categorieList.length) {
      localStorage.setItem("categories", JSON.stringify(categorieList));
    }
  }, [categorieList]);

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
    setSort(target.value);
  };
  const searchHandler = ({ target }) => {
    setSearch(target.value);
  };
  const sortFilterProduct = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAd) > new Date(b.createdAd) ? -1 : 1;
      } else {
        return new Date(a.createdAd) > new Date(b.createdAd) ? 1 : -1;
      }
    });
  };
  const searchFilterProducts = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(search));
  };
  const sortBycategorieFilterProducts = (array) =>{
    if(sortByCat === "") return array
    return array.filter((p) => p.selectCategorie === sortByCat)
  }
  const sortCategorieHandler = ({target}) => {
    setSortByCat(target.value);
  }

  return (
    <div className="w-full h-full lg:h-fit bg-slate-900">
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
              sortByCat={sortCategorieHandler}
            />
            <ProductList
              products={productsFilter}
              deleteProduct={deleteProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
