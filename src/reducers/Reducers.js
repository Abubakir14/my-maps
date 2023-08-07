import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    {
      id: 1,
      points: [
        { lat: 59.84660399, lng: 30.29496392 },
        { lat: 59.82934196, lng: 30.42423701 },
        { lat: 59.83567701, lng: 30.38064206 },
      ],
    },
    {
      id: 2,
      points: [
        { lat: 59.82934196, lng: 30.42423701 },
        { lat: 59.82761295, lng: 30.41705607 },
        { lat: 59.84660399, lng: 30.29496392 },
      ],
    },
    {
      id: 3,
      points: [
        { lat: 59.83567701, lng: 30.38064206 },
        { lat: 59.84660399, lng: 30.29496392 },
        { lat: 59.82761295, lng: 30.41705607 },
      ],
    },
  ],
  selectedRoute: null,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { selectRoute } = routesSlice.actions;
export default routesSlice.reducer;
