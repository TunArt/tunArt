import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material"
import Topbar from "./comp/Topbar";
import Dashboard from "./comp/Dashboard";
import SideBar from "./comp/SideBar";
import Calendar from "./comp/Calendar";
import User from "./comp/User";
import Contacts from "./comp/Contacts";
import Pie from "./comp/Pie";
import Bar from "./comp/Bar";
import Line from "./comp/Line";
import Geography from "./comp/Geography";
// import Login from "./comp/Login.jsx";
function App() {
const [theme,colorMode]=useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
  <div className="app">
    <SideBar/>
    <main className="content">
      <Topbar/>
      <Routes>
      {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/artist" element={<User/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/pie" element={<Pie/>}/>
        <Route path="/bar" element={<Bar/>}/>
        <Route path="/line" element={<Line/>}/>
        <Route path="/geography" element={<Geography/>}/>
      </Routes>
    </main>
  </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
