

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { useState } from "react";
// import Navbar from "./component/Navbar";
// import Textform from './component/Textform';
// import Converter from './component/Converter';

import Todos from './component/Todos';

function App() {
//   const [Mode , setMode] = useState("light");
//  const toggleMode = () =>{
//    if(Mode === "light"){
//      setMode("dark");
//      document.body.style.backgroundColor = "black"
//    }
//    else{
//     setMode("light");
//     document.body.style.backgroundColor = "white"
//   }
// }


  return (
    <div className="App">
       <Todos/>
      {/* <Converter></Converter> */}
      {/* <Navbar Mode = {Mode} toggleMode={toggleMode}/>
      <Textform heading = "Enter the text to analyze"  Mode = {Mode} toggleMode={toggleMode}/>      
       */}
    </div>
  );
}

export default App;
