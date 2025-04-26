import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from 'axios';
type formDataType = {
    name: string, 
    email: string,
    message: string,
}
export const sendMessage = createAsyncThunk<AxiosResponse<any, any>, formDataType, {rejectValue: any}>('contactForm/sendMessage', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/message/api/send-message`, formData);
        console.log(response.data)
        return response.data;
    }catch(error: any) {
        return rejectWithValue(error.response?.data || 'Something went wrong');
    }
})

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: {
        loading: false,
        error: null,
        response: null,
    },
    reducers: {
        setLoading: (state) => {
            state.loading = !state.loading;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload.data.response || action.payload.data.error;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.data.error;
        });
    }
});

export const { setLoading } = contactFormSlice.actions;
export default contactFormSlice.reducer;