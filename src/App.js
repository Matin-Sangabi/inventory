import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import ProductList from "./components/productList/productList";

function App() {
  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="max-w-screen-2xl mx-auto pt-20 px-4">
        <div className="flex flex-col lg:flex-row gap-x-12 lg:justify-between">
          <div className="flex flex-col w-full">
            <AddNewProduct />
          </div>
          <div className="flex flex-col w-full">
            <FilterProducts />
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
