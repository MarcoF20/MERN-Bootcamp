import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminPage
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          }
        />
        <Route path="/" element={<Shop products={allProducts}/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
