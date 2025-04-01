import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "./features/responsiveSlice"
const Store = configureStore({
    reducer: {
        responsive: responsiveReducer,
    },
})
export type RootStateType = ReturnType<typeof Store.getState>;
export default Store;