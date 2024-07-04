import React from 'react'
import { useState } from 'react'
import Card from './Card'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Testimonials(props) {
  let data = props.reviews
  const [index, setIndex] = useState(0)

  function leftHandler(event) {
    index === 0 ? setIndex(data.length - 1) : setIndex(index-1)
  }

  function rightHandler(event) {
    index === data.length - 1 ? setIndex(0) : setIndex(index+1)
  }

  function surpriseMeHandler() {
    let randNumber = Math.floor(Math.random() * data.length)
    setIndex(randNumber)
  }
  
  return (
    <div>
        <Card data={data[index]}/>

        <div>
          <div>
            <button onClick={leftHandler}><MdKeyboardArrowLeft /></button>

            <button onClick={rightHandler}><MdKeyboardArrowRight /></button>
          </div>

          <button onClick={surpriseMeHandler}>Suprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials