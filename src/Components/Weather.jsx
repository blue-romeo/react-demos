import React from 'react'

const Weather = () => {
   let temp = 20;
  
      if (temp < 15) {
        return <h1>Weather: Cold</h1>;
        } else if (temp >= 15 && temp < 25) {
            return <h1>Weather: Warm</h1>;
        } else {
            return <h1>Weather: Hot</h1>;}
            
        
        }       
        
    
 

export default Weather
