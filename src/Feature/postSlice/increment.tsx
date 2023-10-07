import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../hooks/useFetcher";

type DataState = {
  loading: boolean;
  data: []; // Define the type of your data
  error: string | boolean;
};

const initialState: DataState = {
  loading: false,
  data: [],
  error: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default dataSlice.reducer;
