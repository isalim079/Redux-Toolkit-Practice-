/* eslint-disable react-refresh/only-export-components */
import {createSlice} from "@reduxjs/toolkit"

export const Status = Object.freeze({
    success: 'success',
    error: 'error',
    loading: 'loading'
})

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: Status.success
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const {setProducts, setStatus} = ProductSlice.actions
export default ProductSlice.reducer

// middleware

export function fetchProducts() {
    return async function fetchProductsThunk(dispatch) {
        dispatch(setStatus(Status.loading))
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            // console.log(data);
            dispatch(setProducts(data))
            dispatch(setStatus(Status.success))
        }
        catch(error) {
            console.log(error);
            dispatch(setStatus(Status.error))
        }
    }
}