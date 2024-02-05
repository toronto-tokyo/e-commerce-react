import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  brands: string[];
  colors: string[];
}

const initialState: IInitialState = {
  brands: [],
  colors: [],
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
    toggleColor(state, action: PayloadAction<string>) {
      const color = action.payload;
      if (state.colors.includes(color)) {
        state.colors = state.colors.filter((item) => item !== color);
      } else {
        state.colors.push(color);
      }
    },
  },
});

export default filterSlice;
export const { toggleBrand, setFilters, toggleColor } = filterSlice.actions;
