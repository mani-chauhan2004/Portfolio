import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "./features/responsiveSlice"
import contactFormReducer from "./features/contactFormSlice"
const Store = configureStore({
    reducer: {
        responsive: responsiveReducer,
        contact: contactFormReducer,
    },
})
export type RootStateType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;