import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import ProductForm from "../forms/ProductForm";


const EditProductModal = ({open, onClose, onSubmit, product}) =>{

  return(
    <Dialog
    open={open}
    onClose={onClose}
    >
      <DialogTitle>Editing this product</DialogTitle>
      <DialogContent>
        <ProductForm 
          onSubmit={onSubmit}
          defaultEditValues={product}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          form="product-form"
          children="Cancel"
          onClick={onClose} 
        />
        <Button
          variant="outlined"
          form="product-form"
          type="submit"
          children="Edit product"
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  )
}

export default EditProductModal;