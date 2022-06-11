import React,{ useEffect,useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../Services/CryptoApi';
const Cryptocurrencies=({simplified})=> {
  const count = simplified ? 10 : 100;
  const { data: cryptoList , setData }=useGetCryptosQuery(count);
  const [cryptos,setCryptos]=useState([])
 const [searchTerm,setSearchTerm]=useState('')
useEffect(() => {
const filterData=cryptoList?.data?.coins.filter((coins )=>
coins.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
setCryptos(filterData)
// console.log(filterData)
}, [cryptoList,searchTerm]);


if(setData) return 'loading....'
console.log(cryptos);
return (
    <>
    {!simplified &&(

     <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) =>
               setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
    )}
     <Row gutter={[32,32]} className="crypto-card-container">
{cryptos?.map((currency)=>(
  <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
  <Link key={currency.uuid} to={`/crypto/${currency.uuid} `}>
  {/* <Link key={currency.uuid} to={`/crypto/Qwsogvtv82FCd `}> */}
  <Card title={`${currency.rank}. ${currency.name}`}
  extra={<img className='crypto-image' src={currency.iconUrl}/>}
  hoverable
  >
      <p>price:{`${millify(currency.price)}`}</p> 
      <p>Market Cap: {millify(currency.marketCap)}</p>
      <p>Daily Change: {currency.change}%</p>
      
  </Card>
   </Link>
   </Col>
 ))}
  </Row>  
    
    </>
  )
}

export default Cryptocurrencies