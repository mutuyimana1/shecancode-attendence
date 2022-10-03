import React from "react";
import Footer from "./footer";

const HomeLAyout = ({children}) =>{
  return(
    <>
    <div className="HomeLayout-container">
      <div style ={{minheight:"170vh"}} >
        {children}
      </div>
      <Footer></Footer>
    </div>
    </>
  )
  
}
export default HomeLAyout;