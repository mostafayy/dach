import React,{useState,useEffect} from 'react'
import {Button,Typography,Menu,Avatar} from 'antd'
import {Link}from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BugOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
import icon from '../Images/cryptocurrency.png'
function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
   
  useEffect(()=>{
const handelResive=()=>setScreenSize(window.innerWidth)
window.addEventListener("resize",handelResive)
handelResive()
return()=>window.removeEventListener("resize",handelResive)
  },[])
  
  
  useEffect(()=>{
if(screenSize < 768){
  setActiveMenu(false)
}else{
  setActiveMenu(true)
}

  },[screenSize])

  
  
  
  
  
  
  
  
  
  
  
  
  
  const menuItems = [
    {
      key: 'Homepage',
   icon: <HomeOutlined />,
    label:<Link to="/">Home</Link>,
},
{
   key: 'Crypto',
   icon: <FundOutlined />,
   label: <Link to="/cryptocurrencies">cryptocurrencies</Link>,
},
{
   key: 'Exchanges',
 icon: <MoneyCollectOutlined />,
 label: <Link to="/exchanges">Exchanges</Link>,
},
{
  key: 'News',
 icon: <MoneyCollectOutlined />,
label:<Link to="/new">New</Link>,
},
];
  return (
    <div className='nav-container'>
        <div className='logo-container'>
<Avatar src={icon}size="large" />
<Typography.Title level={2} className='logo'>
<Link to="/">Crytoverse</Link>
</Typography.Title>
<Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
<MenuOutlined/>
</Button>
        </div>
      {activeMenu &&(
        
  <Menu items={menuItems}  theme='dark'/>  
      )}
        {/* <Menu theme='dark'>
<Menu.Item icon={<HomeOutlined/>}>
    <Link to="/">Home</Link>
</Menu.Item>
<Menu.Item icon={<FundOutlined/>}>
    <Link to="/crypto">cryptocurrencies</Link>
</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined/>}>
    <Link to="/exchanges">Exchanges</Link>
</Menu.Item>
<Menu.Item icon={<BugOutlined/>}>
    <Link to="/news">News</Link>
</Menu.Item>
        </Menu> */}
        </div>
  )
}

export default Navbar