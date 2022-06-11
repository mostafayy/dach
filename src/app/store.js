import { configureStore } from '@reduxjs/toolkit'

// import ProductSlices from '../redux/ProductSlices'
import { CryptoApi } from '../Services/CryptoApi'
import { CryptoNewsApi } from '../Services/crptoNewsApi'
export default configureStore({
    reducer: {
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
    },

});