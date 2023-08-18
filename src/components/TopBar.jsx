import {TiWeatherPartlySunny} from "react-icons/ti"
const TopBar = ({changeCity}) => {
    const data = [
        {id: "1", "title" : "Mumbai"},
        {id: "2", "title" : "Delhi"},
        {id: "3", "title" : "Lucknow"},
        {id: "4", "title" : "Noida"},
        {id: "5", "title" : "Bengaluru"}
    ]
    
    function handleClick(event){
        changeCity(event.target.value)
        
    
    }



  return (
   <>
  <div className="flex gap-3 justify-center font-thin  md:text-2xl text-white md:h-14 items-center shadow-sm shadow-slate-200 md:py-8 py-4 border-b ">
  <TiWeatherPartlySunny color="white" size={40}/>
  <h1 className="pt-3"> Weather Forecast Inc.</h1>
  </div>
   <div className="flex justify-around items-center p-4 text-white md:text-2xl  ">
   { data.map((city) => (
<button className="border-1 hover:scale-125 transition duration-500 text-md font-sans md:font-bold md:text-2xl rounded-md p-1 hover:text-gray-900" value={city.title}   onClick={handleClick} key={city.id}>{city.title}</button>
))} 
   </div>
   </>
  )
}

export default TopBar