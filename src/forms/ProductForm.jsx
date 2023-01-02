import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

const ProductForm = ({onSubmit}) => {
  const defaultValues = {
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  };
  
  const productFormSchema = yup.object().shape({
    name: yup.string().required("You need to enter a name"),
    description: yup.string(),
    price: yup
    .number()
    .required()
    .typeError("You need to enter a price, must be a number"),
    imageUrl: yup.string(),
  });
  
  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(productFormSchema),
    mode: "all",
  });

  const imageUrlValue = watch("imageUrl")

  return (
    <Box 
      component="form" 
      sx={{padding:"24px"}} 
      id="product-form"
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset(defaultValues)}
    >
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="description"
            render={({field, fieldState}) =>(
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="price"
            render={({field, fieldState})=>(
              <TextField
                {...field}
                label="Price"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="imageUrl"
            render={({field, fieldState})=> (
              <TextField
                {...field}
                label="Image url"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        {
          !!imageUrlValue &&
          <Grid item xs={12}>
            <Box
              component="img"
              src={imageUrlValue}
              sx={{
                width: "100%"
              }}
            >

            </Box>
          </Grid>
        }
      </Grid>
    </Box>
  );
};

export default ProductForm;
