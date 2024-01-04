import useAuthCheck from './hooks/useAuthCheck'
import AllRoutes from './routes';
import React from "react";
import{Menu,Blog} from "./components";




const App=()=>{
  return (
    <div className="flex">
      
      <Menu/>
      <Blog/>
    </div> 
  );
};

export default App;
