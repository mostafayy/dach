
import './App.css';
import {Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import {Layout,Typography,Space,} from 'antd'
import Navbar from './Components/Navbar';
import CryptoDetails from './Components/CryptoDetails';
import Cryptocurrencies from './Components/Cryptocurrencies';
import Exchanges from './Components/Exchanges';
import Homepage from './Components/Homepage';
import New from './Components/New';
function App() {
  return (
    
    <div className="App">
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className='main'>
<Layout>
  <div className='routes'>
<Routes>
  <Route  exact path="/" element={<Homepage/>} />
    
    
  <Route  exact path='/exchanges' element={<Exchanges/>}/>
  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
  <Route  exact path='/crypto/:coinId' element={<CryptoDetails/>}/>
  <Route exact path='/new' element={<New/>}/>
</Routes>
  </div>
</Layout>
      </div>
    <div className='footer' level={5} style={{color:'white',textAlign:'center'}}  >
 <Typography.Title>
  Crytoverse<br/>
  all right reseved
</Typography.Title>
<Space>
<Link to="/">Home</Link>
<Link to="exchanges">Exchanges</Link>
<Link to="news">News</Link>
  
</Space> 
    </div>
 
    </div>
    
  
  );
}

export default App;
