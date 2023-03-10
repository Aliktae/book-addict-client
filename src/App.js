import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

import Login from "./pages/Login";
import Profile from "./pages/UserPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage/>}/>
          <Route path={"/signup"} element={<Registration/>}/>
          <Route path={"/login"} element={<Login/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
