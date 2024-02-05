import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  brands: string[];
}

const initialState: IInitialState = {
  brands: [],
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<{ brands: string[] }>) {
      state = Object.assign(state, action.payload);
    },
    toggleBrand(state, action: PayloadAction<string>) {
      const brand = action.payload;
      if (state.brands.includes(brand)) {
        state.brands = state.brands.filter((item) => item !== brand);
      } else {
        state.brands.push(brand);
      }
    },
  },
});

export default filterSlice;
export const { toggleBrand, setFilters } = filterSlice.actions;
