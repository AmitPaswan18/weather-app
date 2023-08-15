import {  useContext } from "react"
import { useData } from "./App"
import {WiSunrise, WiSunset, WiStrongWind} from "react-icons/wi"
import {BsFillEyeFill, BsDropletFill} from "react-icons/bs"
import {AiOutlineArrowUp, AiFillCloud, AiOutlineArrowDown} from "react-icons/ai"


const Intro = () => {
  const Data =  useContext(useData)

  return (
  <>
  <div className=" flex justify-center p-1 flex-col items-center font-sans px-3 gap-2">
  <div className="md:text-5xl text-4xl">{Data.name} {Data.sys.country} </div>
  <div className="md:text-5xl text-4xl p-2">{Math.round(Data.main.temp / 10)}&deg;C</div>
  <div className="text-3xl  ">{Data.weather[0].description} </div>
  <img className=" h-[100px] w-[100px]" src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@4x.png`}  alt="icon"/>
  <div className="flex items-center gap-2 text-sm md:text-xl justify-center md:gap-4 pt-1">
  <WiSunrise size={38} /> Sunrise - {new Date(Data.sys.sunrise * 1000).toLocaleTimeString()}
   <WiSunset  size={38} /> Sunset - {new Date(Data.sys.sunset * 1000).toLocaleTimeString()}
  </div>
  <div className="flex items-center text-sm md:text-xl gap-2 justify-center md:gap-4">
  <BsFillEyeFill size={30} /> Visibility - {Data.visibility/ 1000} km
   <WiStrongWind  size={30} /> Wind Speed - {Data.wind.speed} km/hr
  </div>
  <div className="flex items-center text-sm md:text-xl gap-2 justify-center md:gap-4">
  <AiOutlineArrowUp size={33} /> Maximum - { Math.floor(Data.main.temp_max / 10)} &deg;C
   <AiOutlineArrowDown  size={33} /> Minimum - {Math.floor(Data.main.temp_min / 10)} &deg;C
  </div>
  <div className="flex items-center text-sm mb-4 md:text-xl gap-2 justify-center md:gap-4">
  <BsDropletFill size={28} /> Humidity - {Data.main.humidity} % 
   <AiFillCloud  size={33} /> Cloud - {Data.clouds.all} %
  </div>
  </div>

  </>

  )
}

export default Intro