import React from 'react';
import ProductListShop from '../components/ProductListShop';
import Container from "@mui/system/Container";
const Shop = ({products}) => {
  return (
    <Container maxWidth="lg" sx={{margin: 2}}>
      <ProductListShop products={products}/>
    </Container>
  )
}

export default Shop