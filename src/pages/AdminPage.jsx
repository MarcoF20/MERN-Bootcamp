import { useState } from "react";
import { Container, Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddProductModal from "../modals/AddProductModal";
import ProductListAdmin from "../components/ProductListAdmin";
import EditProductModal from "../modals/EditProductModal";
const AdminPage = ({ allProducts, setAllProducts }) => {
  const [isAddProductModalVisible, setIsAddProductModalVisible] =
    useState(false);
  const [isEditProductModalVisible, setIsEditProductVisible] = useState(false);
  const [editProduct, setEditProduct] = useState();

  const handleOnSubmit = (product) => {
    const tempProducts = Array.from(allProducts);
    if (product._id) {
      const productIndex = tempProducts.findIndex((p) => p._id === product._id);
      tempProducts[productIndex] = product;
    } else {
      tempProducts.push({
        ...product,
        _id: tempProducts.length + 1,
      });
    }
    setAllProducts(tempProducts);
  };

  const handleOnEdit = (product) => {
    setIsEditProductVisible(true);
    setEditProduct(product);
  };

  const handleOnDelete = (id) => {
    setAllProducts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
      <Fab
        variant="extended"
        onClick={() => {
          setIsAddProductModalVisible(true);
        }}
        sx={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new product
      </Fab>
      <ProductListAdmin products={allProducts} handleOnEdit={handleOnEdit}  handleOnDelete={handleOnDelete}/>
      <AddProductModal
        open={isAddProductModalVisible}
        onClose={() => {
          setIsAddProductModalVisible(false);
        }}
        onSubmit={handleOnSubmit}
      />
      <EditProductModal
        open={isEditProductModalVisible}
        onClose={() => {
          setIsEditProductVisible(false);
        }}
        onSubmit={handleOnSubmit}
        product={editProduct}
      />
    </Container>
  );
};

export default AdminPage;
