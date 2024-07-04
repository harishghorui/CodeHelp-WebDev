import React from 'react'

function Card(props) {
  let data = props.data
  
  return (
    <div>
      {/* <div>
        <img src={data.image} alt="" />
      </div> */}

      <div>
        <h2>{data.name}</h2>
        <p>{data.job}</p>
      </div>

      {/* <div>
        <p>{data.text}</p>
      </div> */}
    </div>
  )
}

export default Card