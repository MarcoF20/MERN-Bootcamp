import React from "react";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import yellow from "@mui/material/colors/yellow";
import ProductInfo from "./ProductInfo";
const ProductAdmin = ({ product, handleOnEdit, handleOnDelete}) => {
  const color = yellow[600]
  return (
    <>
      <ProductInfo product={product}/>
      <Stack direction="row">
        <Button
          onClick={() => {handleOnEdit(product)}}
          variant="contained"
          sx={{
            backgroundColor: color,
            height: 64,
            width: 1,
            borderRadius: 0,
            margin: 0,
            padding: 0,
            boxShadow: 3,
            "&:hover": {
              backgroundColor: color
            }
          }}
        >
          EDIT
        </Button>
        <Button
          onClick={() => handleOnDelete(product._id)}
          variant="contained"
          color="error"
          sx={{
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadius: 0,
            boxShadow: 3,
          }}
        >
          DELETE
        </Button>
      </Stack>
    </>
  );
};

export default ProductAdmin;
