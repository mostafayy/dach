import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import axios from 'axios';
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
    }
  };
  const option = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/exchanges',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: '50',
      offset: '0',
      orderBy: '24hVolume',
      orderDirection: 'desc'
    },
    headers: {
      'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

const CryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c37a3c3730msh735ac1211441d18p1e9ca8jsnd071864901bb'
}
const baseUrl='https://coinranking1.p.rapidapi.com'
const createRequest= (url) =>({url,headers:CryptoApiHeaders})
 export const CryptoApi=createApi({
     reducerPath:"CryptoApi",
     baseQuery:fetchBaseQuery({baseUrl}),
     endpoints:(builder)=>({
         getCryptos:builder.query({
             query:(count)=> createRequest(`/coins?limit=${count}`)
         }),
          getCryptosDetails:builder.query({
             query:(coinId)=> createRequest(`/coin/${coinId}`),
         }),
          getCryptosHistory:builder.query({
             query:({coinId,timeperiod})=> createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
         }),
         getCryptosExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
     })
 })


export const{ useGetCryptosQuery,
    useGetCryptosDetailsQuery,
    useGetCryptosExchangesQuery,   
    useGetCryptosHistoryQuery,   
} = CryptoApi;

