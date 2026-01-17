import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "flowers",
    activeTab: "photos",
    result: [],
    loading: false,
    error: null,
  },
  reducers: {
    SetQuery(state, action) {
      state.query = action.payload;
    },
    
    SetActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    SetResult(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    SetLoading(state) {
      state.loading = true;
      state.error = null;
    },
    SetError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
   
  },
});

export const {
  SetQuery,
  SetActiveTabs,
  SetResult,
  SetError,
  SetLoading,
  
} = searchSlice.actions;

export default searchSlice.reducer;
