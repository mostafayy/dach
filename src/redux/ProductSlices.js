import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchProducts = createAsyncThunk(
    'Products/fetchProducts',async () => {
        const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/coins',
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
          },
          headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb'
          }
        };
        
        axios.request(options).then(function (response) {
          
          console.log(response.data.data.stats);
          return  response.data
    

        }).catch(function (error) {
          console.error(error);
        });
        //   const response = await axios.get("https://coinranking1.p.rapidapi.com?api=c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb")
        //   return response.data
    }
    )
export const ProductSlices = createSlice({
  name: 'data',
  initialState: {
    data:{},
  
  },
  reducers: {

  }  ,
  extraReducers:{
    [fetchProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchProducts.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, data: payload };
    },
  },
})

export const getAllData=(state)=> state.data
// console.log(fetchProducts);
export default ProductSlices.reducer