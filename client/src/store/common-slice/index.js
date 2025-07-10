import { base_URL } from "@/utils/BaseURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `${base_URL}/common/feature/get`
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `${base_URL}/common/feature/add`,
      { image }
    );

    return response.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
extraReducers: (builder) => {
  builder
    .addCase(getFeatureImages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFeatureImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.featureImageList = action.payload.data;
    })
    .addCase(getFeatureImages.rejected, (state) => {
      state.isLoading = false;
      state.featureImageList = [];
    })
    .addCase(addFeatureImage.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addFeatureImage.fulfilled, (state, action) => {
      state.isLoading = false;
      // Optional: add the newly uploaded image to the list
      // state.featureImageList.push(action.payload.data);
    })
    .addCase(addFeatureImage.rejected, (state) => {
      state.isLoading = false;
    });
}

});

export default commonSlice.reducer;
