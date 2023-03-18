import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './pages/Index'
import NoMatch from './pages/NoMatch.js'
import Auth from './pages/auth/login'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StatusModal from './components/Errors/ApiModal'

import Paraekle from './pages/ParaEkle'
function App() {
  const [status,setStatus] = useState()
  useEffect(() => {
    (async() => {
      try{
        let apiReq = await axios.get(`https://api.garparw.me/`)
        let apiStatus = apiReq.status
        if(apiStatus !== 200){
          setStatus(true)
        }
        if(apiStatus === 200){
          setStatus(false)
        }
      }catch(err){
        console.log(err)
      }
    })()
  })
  return (
   <div className="GarparwClient">
     {status &&
       <StatusModal />
     }
     
         <Routes>
                   <Route path="/" element={<Layout />}> </Route>
            <Route path="/auth/login" element={<Auth />}> </Route>
           <Route path="/money" element={<Paraekle />}> </Route>
 
          </Routes>
   </div>
  );
}

export default App;
