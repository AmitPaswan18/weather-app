/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react"
import { createContext } from 'react';
import TopBar from "./components/TopBar"
import InputBar from "./components/InputBar"
import Intro from "./Intro";
import axios from "axios"
import Forecast from "./components/Forecast";

export const useData  = createContext()
function App() {
  const [Data , setData] = useState([])
  const[city, setCity] = useState("Gorakhpur")
  const[bg, setBg] = useState("")
  const [err , seterr] = useState(false)
  

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a4270ed934e7f46c75a035970db047c`
    axios.get(url).then(response =>{
      seterr(false)
      handlebg(response.data.weather[0].id)
      setData(response.data)
        
    }).catch((err) => {seterr(true) ; console.log(err) });
  }, [city])


function handlebg(id){
  if( id >= 200  && id < 300){
   setBg("bg-[url('./Images/thunderstrom.webp')]")
  }
 
  else if( id >= 300  && id < 600){
   setBg("bg-[url('./Images/rain.webp')]")
  }
 
  else if( id >= 600  && id < 700){
   setBg("bg-[url('./Images/snow.webp')]")
  }
 
  else if( id >= 700  && id < 800){
   setBg("bg-[url('./Images/Hazeimg.webp')]")
  }
 
  else if( id >= 801 && id < 900){
   setBg("bg-[url('./Images/cloud.webp')]")
  }
 
  else{
   setBg("bg-[url('./Images/cloud.webp')]")
  }
 
  
 
 } 
  return (
    <> 
     {Data.length === 0? <h1 className=" md:w-full h-[100vh] md:text-xl flex justify-center items-center bg-cover bg-[url('./bgImg.webp')]"><p className="animate-waving-hand border  text-sm  p-4 rounded-xl text-white md:w-fit w-[50%] bg-slate-800">Loading Weather Please wait...</p></h1>: <div className="w-full">
     <> <div className={`bg-cover text-white ${bg}`}>
     <TopBar changeCity={setCity}/> <InputBar changeCity={setCity} error={err}/> 
     <useData.Provider value={Data}>
      <Intro/>
     </useData.Provider>
     </div>
     <useData.Provider value={Data}>
     <div className="bg-blue-500 text-black"> <Forecast/></div>
     </useData.Provider>
      </>
     </div> 
  
     }
    </>
  )
}

export default App

