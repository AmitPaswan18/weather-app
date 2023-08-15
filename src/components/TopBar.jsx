

const TopBar = ({changeCity}) => {
    const data = [
        {id: "1", "title" : "Mumbai"},
        {id: "2", "title" : "New Delhi"},
        {id: "3", "title" : "Lucknow"},
        {id: "4", "title" : "Noida"},
        {id: "5", "title" : "Bengaluru"}
    ]
    
    function handleClick(event){
        changeCity(event.target.value)
        
    
    }



  return (
   <>
   <h1 className="flex justify-center font-thin  md:text-2xl text-white md:h-14 items-center shadow-sm shadow-slate-200 md:py-8 py-4 border-b ">Top Searches</h1>
   <div className="flex justify-around items-center p-4 text-white md:text-2xl  ">
   { data.map((city) => (
<button className="border-1 text-sm md:text-2xl rounded-md p-1 hover:text-gray-900" value={city.title}   onClick={handleClick} key={city.id}>{city.title}</button>
))} 
   </div>
   </>
  )
}

export default TopBar