import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useData } from "../App";
// import logo from "./github-logo.png"
// import logo2 from "./linkedin.png"
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Forecast = () => {
  const Data = useContext(useData);
  const [forcastData, setForecastData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${Data.coord.lat}&lon=${Data.coord.lon}&appid=8a4270ed934e7f46c75a035970db047c`
      )
      .then((response) => {
        setForecastData(response.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Data.coord.lat, Data.coord.lon]);
  return (
    <div className="flex flex-col text-center justify-center items-center md:pt-4 w-full">
      <h1 className="flex w-full py-3 justify-center text-xl my-4 md:text-4xl md:p-5  border-y shadow-md shadow-gray-400 bg-gradient-to-r via-blue-500 text-white">
        Next Five Days Forecast
      </h1>
      <div className="grid px-2 md:grid-cols-8 grid-cols-3  w-full  md:gap-5 gap-4">
        {forcastData.map((item) => (
          <div key={crypto.randomUUID()}>
            <div
              key={crypto.randomUUID()}
              className=" text-white shadow-md hover:scale-110 transition ease-out cursor-pointer bg-blue-500 hover:ease-in duration-150 gap-1 md:mx-2 mx-1 shadow-slate-300 flex flex-col text-sm md:text-lg md:p-1 rounded-md h-full justify-center text-center items-center border">
              <div key={crypto.randomUUID()} className="md:max-h-[30%]">
                <p key={crypto.randomUUID()}>{item.dt_txt.split(" ")[0]}</p>
                <p key={crypto.randomUUID()}>{item.dt_txt.split(" ")[1]}</p>
              </div>
              <img
                key={crypto.randomUUID()}
                className="md:max-h-[30%]"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="forcast-icon"
              />
              <div key={crypto.randomUUID()} className="md:max-h-[30%]">
                <p key={crypto.randomUUID()}>{item.weather[0].description}</p>
                <p key={crypto.randomUUID()}>
                  {Math.floor(item.main.temp / 10)}&deg;C
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:font-bold md:text-md text-sm font-sans md:bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600  border-y h-12 md:h-[60px] w-full items-center gap-2 md:gap-4 p-5 ">
        <div className="flex gap-2">
          <a href="https://github.com/AmitPaswan18">
            {" "}
            <BsGithub size={24} color="white" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/amit-paswan-04134a23b">
            {" "}
            <BsLinkedin size={24} color="white" />{" "}
          </a>
        </div>
        <div className="text-white">
          Design & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/amit-paswan-04134a23b"
            className="hover:text-gray-300">
            {" "}
            Amit Paswan
          </a>
        </div>
      </div>
      <div className="text-sm text-white p-2 font-thin font-sans w-full md:bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">
        <p className="p-2">
          {" "}
          © 2023 Weather Forecast, Inc. Weather and sun design are registered
          trademarks of Weather, Inc. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Forecast;
