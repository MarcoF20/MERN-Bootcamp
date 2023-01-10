import React from 'react'
import Grid from "@mui/material/Grid";
import ProductAdmin from './ProductAdmin';
const ProductListAdmin = ({products, handleOnEdit, handleOnDelete}) => {
  if(products.lenght === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{marginTop: 1,}}>
      {
        products.map(product => {
          return(
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductAdmin 
              product={product}
              handleOnEdit={handleOnEdit}  
              handleOnDelete={handleOnDelete}
            />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default ProductListAdmin