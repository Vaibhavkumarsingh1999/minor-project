import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Home from "./Home";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import contact from "./contact";

import Contact from "./contact";
import Blog from "./blog";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { productdetailsarray } from "./productdetails";

export const ProductContext = createContext({
  productList: [],
  setProductList: () => {},
  removeThisProduct: () => {},
});

function App() {
  const [productList, setProductList] = useState(productdetailsarray);
  function removeThisProduct(index) {
    let newArr = [...productList];
    newArr.splice(index, 1);
    setProductList(newArr);
  }
  return (
    <ProductContext.Provider
      value={{
        productList: productList,
        setProductList: setProductList,
        removeThisProduct: removeThisProduct,
      }}
    >
      <div>
        <Header />
        {/* <Form/> */}
        <Outlet />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
