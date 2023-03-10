import React from "react";
import Header from "./pages";
import CardsDetails from './pages/Detail';
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
function App() {
  return (
   <>
    <Header/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/cart/:id' element={<CardsDetails/>}/>
          {/* <Route component={NotFound} /> */}
        </Routes>
   </>
  );
}
export default App;
