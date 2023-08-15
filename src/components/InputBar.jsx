import { ImSearch } from 'react-icons/im';
import {  useState, useEffect } from "react"


const InputBar = ({changeCity, error}) => {

    const[input, setInput] = useState("")
    

    function handleChange(event){

        setInput(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        changeCity(input)
        setInput("")
    }

    useEffect(() => {
      if( error){
          console.log('error')
          setInput("INVALID INPUT")
        
  
     }
     }, [error])


  return (
    <div className="w-full">
   <form className="w-full flex justify-center" onSubmit={handleSubmit}>

   <input className="h-[55px] md:w-[30%] w-[50%] border-2 rounded-xl my-1 text-black p-2 ml-3" onChange={handleChange} required value={input}  type="text"  />
   <button className='ml-4 mb-2 ' type="submit"> <ImSearch size={30} /> </button>
   </form>
    </div>
  )
}

export default InputBar