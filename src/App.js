

import React from "react";
import EcomCard from './components/EcomCard'
import { Row, Col } from "antd";
function App() {
  const data = [
    { id: 1, title: 'Astor Sofa Set in Brown Air Leatherette', description: "The Astor Sofa Set is a stylish and comfortable furniture set that is upholstered in brown air leatherette.", price: 1200 },
  
  ]
  return (

   <>
      {data.map((val) => (
        <EcomCard title={val.title} description={val.description} price={val.price}>Card content</EcomCard>
        
        ))}
    
        </>
 




  );
}

export default App;
