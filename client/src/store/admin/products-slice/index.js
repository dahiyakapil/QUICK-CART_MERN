


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_URL } from "@/utils/BaseURL";

const initialState = {
  isLoading: false,
  productList: [],
};

// export const addNewProduct = createAsyncThunk(
//   `${base_URL}/products/addnewproduct`,
//   async (formData) => {
//     const result = await axios.post(
//       `${base_URL}/admin/products/add`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return result?.data;
//   }
// );


export const addNewProduct = createAsyncThunk(
  `adminProducts/addNewProduct`, // just an action type, not a URL
  async (formData) => {
    const result = await axios.post(
      `${base_URL}/admin/products/add`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);


export const fetchAllProducts = createAsyncThunk(
  `${base_URL}/products/fetchAllProducts`,
  async () => {
    const result = await axios.get(
      `${base_URL}/admin/products/get`
    );

    return result?.data;
  }
);

export const editProduct = createAsyncThunk(
  `${base_URL}/products/editProduct`,
  async ({ id, formData }) => {
    const result = await axios.put(
      `${base_URL}/admin/products/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  `${base_URL}/products/deleteProduct`,
  async (id) => {
    const result = await axios.delete(
      `${base_URL}/admin/products/delete/${id}`
    );

    return result?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default AdminProductsSlice.reducer;
