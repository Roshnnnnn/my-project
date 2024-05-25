import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filteredData: [],
  filters: {
    cats: null,
    cashback_enabled: null,
    is_promoted: null,
    is_shareable: null,
    status: null,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      state.filteredData = action.payload.filter((item) =>
        applyFilters(item, state.filters)
      );
    },
    setFilters(state, action) {
      const newFilters = action.payload;
      state.filters = { ...state.filters, ...newFilters };
      state.filteredData = state.data.filter((item) =>
        applyFilters(item, state.filters)
      );
    },
  },
});

const applyFilters = (item, filters) => {
  return (
    (filters.cats === "" || item.cats == filters.cats) &&
    (filters.cashback_enabled === "" ||
      item.cashback_enabled == filters.cashback_enabled) &&
    (filters.is_promoted === "" || item.is_promoted == filters.is_promoted) &&
    (filters.is_shareable === "" ||
      item.is_shareable == filters.is_shareable) &&
    (filters.status === "" || item.status == filters.status)
  );
};

export const { setData, setFilters } = filterSlice.actions;
export const selectFilteredData = (state) => state.filter.filteredData;
export default filterSlice.reducer;
