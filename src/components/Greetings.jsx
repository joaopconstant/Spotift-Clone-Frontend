import React from 'react'

const Greeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = ""

  if (currentHour < 12) greeting = "Good Morning"
  else if (currentHour < 18) greeting = "Good Afternoon"
  else greeting = "Good Night"

  return <h1>{greeting}</h1>
}

export default Greeting
