import React, { useState } from "react";
import "./index.css";
import axios from "axios";

let target = "Hyderabad";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.weatherapi.com/v1/current.json?key=10757f078f834b188ed81247230306&q=${location}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.location ? <p>{data.location.name}</p> : null}
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp_f}°F</h1> : null}
            {/* <h1>60F</h1> */}
          </div>
          <div className="description">
            {data.current ? (
              data.current.condition ? (
                <p>{data.current.condition.text}</p>
              ) : null
            ) : null}
          </div>
        </div>
        {data.location ? (
          data.location.name ? (
            <div className="bottom">
              <div className="feels">
                {data.current ? <p>{data.current.feelslike_f}°F</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.current ? <p>{data.current.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.current ? <p>{data.current.wind_mph}MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          ) : null
        ) : <p className="nulltext">Enter Your Location To Check The Weather</p>}
      </div>
      </div>
    
  );
}

export default App;
