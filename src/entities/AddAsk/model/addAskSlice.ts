import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IinitialState {
    error: string | null
}

const initialState: IinitialState = {
    error: null,

}

const AddAskSlice = createSlice({
    name: "AddAskSlice",
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        },
        setIsPerfect(state) {
            state.error = 'Perfect'
        }
    }
})


export default AddAskSlice.reducer
export const { setError, setIsPerfect } = AddAskSlice.actions