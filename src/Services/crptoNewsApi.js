import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb'
    }
  };
  
  axios.request(options).then(function (response) {
    //   console.log(response.data);
  }).catch(function (error) {
    //   console.error(error);
  });
const cryptoApiHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com'
const createRequest= (url) =>({url,headers:cryptoApiHeaders})
export const CryptoNewsApi=createApi({
    reducerPath:"CryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptosNews:builder.query({
            query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const{ useGetCryptosNewsQuery,
} = CryptoNewsApi;

