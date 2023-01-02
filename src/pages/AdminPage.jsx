import {useEffect, useState} from 'react'
import {Box, Fab, Typography } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddProductModal from "../modals/AddProductModal"
const AdminPage = ({allProducts, setAllProducts}) => {

  const [isAddProductModalVisible, setIsAddProductModalVisible] = useState(false)

  const handleOnSubmit = product =>{
    let tempAllProducts = Array.from(allProducts)
    tempAllProducts.push(product)
    setAllProducts(tempAllProducts)
  }
  useEffect(() => {
    console.log(allProducts)
  },[allProducts])
  return (
    <Box>
      <Fab
      variant="extended" 
      onClick={() => {setIsAddProductModalVisible(true)}}
      sx={{
        position: "absolute",
        bottom: "24px",
        right: "24px",
      }}
      >
        <AddCircleOutline sx={{mr:1}}/>
        Add a new product
      </Fab>
      <Typography>
        {allProducts[0]?.name}
      </Typography>
      <AddProductModal 
        open={isAddProductModalVisible}
        onClose={ () => {setIsAddProductModalVisible(false)}}
        onSubmit={handleOnSubmit}
      />
    </Box>
  );
};

export default AdminPage;