import React, { useState, useEffect } from "react";

import PostList from "./pages/PostList";
import Uselist from "./components/Uselist"
function App() {

  return (
  //  <div>
  //   <PostList/>
  //  </div>

  <div>
        <div className="container mx-auto mt-10"> 

      <Uselist /> 
    </div> 
  </div>
  );
}

export default App;
