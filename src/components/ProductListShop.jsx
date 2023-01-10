import Grid from '@mui/material/Grid';
import React from 'react'
import ProductShop from './ProductShop';

const ProductListShop = ({products}) => {
  if (products.lenght === 0){
    return null;
  }

  return (
    <Grid container spacing={2}>
      {
        products.map((product) =>{
          return(
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductShop product={product}/>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default ProductListShop