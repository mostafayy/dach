import React,{useEffect,useState} from 'react'
import millify from 'millify'
import {Typography,Row,Col,Statistic}from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import News from "../Components/New"
import Cryptocurrencies from "../Components/Cryptocurrencies"

import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts,getAllData } from '../redux/ProductSlices'
import {useGetCryptosQuery} from '../Services/CryptoApi'
const  Homepage=()=> {
  // const data = useSelector(getAllData)
  // const dispatch=useDispatch(
const {data, setData}=useGetCryptosQuery(10)
// console.log(data
// isFetching(data?.data)
const globalStats=data?.data?.stats
if(setData) return "loading...";
// console.log(globalStats?.totalExchanges)
// useEffect(()=>{
// dispatch(fetchProducts())
// },[dispatch])
// useEffect(()=>{
  // console.log("product:",data)
  //  },[data])
return (
    <div className='moon'>
      {globalStats?<>
<Typography.Title level={2} className="heading">
  Global crpto stats 
</Typography.Title>
<Row>
  <Col span={12}><Statistic title="total Cryptocurrenies" value={globalStats?.total}/></Col>
   <Col span={12}><Statistic title="total Exchanges" value={`$${millify(globalStats.totalExchanges)}`} /></Col> 
  <Col span={12}><Statistic title="total Market cap" value={`${millify(globalStats.totalMarketCap)}`}/></Col>
  <Col span={12}><Statistic title="total 24h volume" value={`${millify(globalStats.total24hVolume)}`}/></Col>
  <Col span={12}><Statistic title="total  markets" value={`${millify(globalStats.totalMarkets)}`}/></Col>
</Row>
      </>:<>""</>}
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptos In The World</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3}><Link to="/news">Show more</Link></Typography.Title>
      </div>
      <News simplified />





    </div>
  )
}
export default  Homepage
