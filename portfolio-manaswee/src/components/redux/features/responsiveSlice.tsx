import { createSlice } from "@reduxjs/toolkit";
const responsiveSlice = createSlice({
    name: "responsive",
    initialState: {
        isMobile: false,
    },
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
    },
})

export const { setIsMobile } = responsiveSlice.actions;

export default responsiveSlice.reducer;