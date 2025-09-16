import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ProductCreate from "./components/ProductCreate";
import Product from "./components/Products";
import MenuList from "./components/MenuList";
import Body from "./components/Body";
import SpecialOffer from "./components/SpecialOffer.jsx";
function MainApp(){
  return(
     <>
        <Product /> 
		<MenuList />
		<Body />
         <SpecialOffer/>
    </>
  );
}

function App(){
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainApp/>} />
		<Route path="/add" element={<ProductCreate />}/>
      </Routes>
   </Router>
  );
}

export default App;