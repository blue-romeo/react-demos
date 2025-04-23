import React from 'react'

const Greeting = ({timeofday}) => {
  
return(  
(timeofday === "morning") ? <h1>Good Morning</h1> :
(timeofday === "noon") ? <h1>Good Afternoon</h1> :
(timeofday === "evening") ? <h1>Good Evening</h1> :
(timeofday === "night") ? <h1>Good Night</h1> :
<h1>Good Day</h1> )
}


export default Greeting
