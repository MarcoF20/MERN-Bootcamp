import Button from "@mui/material/Button";
import React from "react";
import ProductInfo from "./ProductInfo";
import deepPurple from "@mui/material/colors/deepPurple";
import Stack from "@mui/system/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";

const ProductShop = ({ product }) => {
  const color = deepPurple.A700;
  return (
    <>
      <ProductInfo product={product} />
      <Stack direction="row">
        <Button
          sx={{
            backgroundColor: color,
            height: 64,
            width: 1,
            borderRadius: 0,
            margin: 0,
            padding: 0,
            boxShadow: 3,
            color: "white",
            "&:hover": {
              backgroundColor: color,
            },
          }}
        >
          <Typography fontSize={18}>Add to cart</Typography>
          <ShoppingCartIcon sx={{ ml: 1 }} />
        </Button>
      </Stack>
    </>
  );
};

export default ProductShop;
