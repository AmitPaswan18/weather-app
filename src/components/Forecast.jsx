import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useData } from "../App"
const Forecast = () => {
    const Data =  useContext(useData)
    const [forcastData , setForecastData] = useState([])


    useEffect(() => {

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${Data.coord.lat}&lon=${Data.coord.lon}&appid=8a4270ed934e7f46c75a035970db047c`).then(response =>{

    setForecastData(response.data.list)
}).catch(err => {
    console.log(err)
})
      }, [Data.coord.lat, Data.coord.lon])
  return (
<div className="flex  flex-col text-center justify-center items-center pt-4 gap-5">
    <h1 className="flex w-full justify-center text-2xl p-3 md:text-4xl md:p-5 text-white border-y shadow-md shadow-gray-400">Next  Five Days Forecast</h1>
    <div  className="grid md:grid-cols-8 grid-cols-3  w-full  gap-3">
        {forcastData.map((item)=> (
            <>
            <div key={crypto.randomUUID()}  className="shadow-md  mx-2 shadow-slate-300 flex flex-col text-sm md:text-lg p-1 rounded-md h-full justify-center text-center items-center border">
           <div key={crypto.randomUUID()} className="md:max-h-[30%]">
           <p key={crypto.randomUUID()}  >{item.dt_txt.split(" ")[0]}</p>
            <p key={crypto.randomUUID()}  >{item.dt_txt.split(" ")[1]}</p>
           </div>
            <img key={crypto.randomUUID()}  className="md:max-h-[30%]"  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="forcast-icon" />
            <div key={crypto.randomUUID()}  className="md:max-h-[30%]">
            <p key={crypto.randomUUID()} >{item.weather[0].description}</p>
            <p key={crypto.randomUUID()} >{Math.floor(item.main.temp/10)}&deg;C</p>
            </div>
            </div>
</>
        ))}
  

  
    </div>
    <div className="flex justify-center md:font-bold md:text-md  font-sans bg-gradient-to-r text-sm from-slate-500 to-slate-800 border-y h-14 md:h-[60px] w-full items-center gap-2 md:gap-2 p-5">
 <div className="flex">
 <a href="https://github.com/AmitPaswan18"> <img className="h-8 w-7" src="./src/Images/github.svg" alt="Logo"  /> </a> 
 <a href="https://www.linkedin.com/in/amit-paswan-04134a23b"> <img className="h-8 w-8" src="./src/Images/linkedin.svg" alt=" Logo"  /> </a>
 </div>
 <div>
 Design & Developed by <a href="https://www.linkedin.com/in/amit-paswan-04134a23b" className="hover:text-slate-950"> Amit Paswan</a>
 </div>
    </div>
    <div className="text-sm pb-4 font-thin font-sans ">
     <p> © 2023 Weather, Inc. Weather and sun design are registered trademarks of Weather, Inc. All Rights Reserved.</p>
      </div>
</div>
  
  )
}

export default Forecast