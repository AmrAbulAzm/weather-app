import React from 'react'

const SingleDay = ({ data, city, maxMin, weekDay, day, month }) => {
  console.log("data", data)
  return (
    <div>
      <p>{city}</p>
      <p>{`${maxMin.max} ${maxMin.min}`}</p>
      <p>{weekDay}</p>
      <p>{day}</p>
      <p>{month}</p>
    </div>
  )
}

export default SingleDay;