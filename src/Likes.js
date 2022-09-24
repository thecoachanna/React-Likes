import './App.css';
import React, { useState } from 'react'
import LikeTotal from './LikeTotal'


const Likes = () => {

    const [totalLikes, setTotalLikes] = useState(0)

    const addLike = () => {
        setTotalLikes(totalLikes + 1)
    }
    let subtractLike = () => {
        setTotalLikes(totalLikes - 1)
    }
    if (totalLikes <= 0) {
        subtractLike = () => setTotalLikes(0)
    }


  return (
      <div>
          {/* <p>{ totalLikes }</p> */}
          <LikeTotal totalLikes={totalLikes} />
          <button className="increment" onClick={subtractLike}>-</button>
          <button className="decrement" onClick={addLike}>+</button>
    </div>
  )
}

export default Likes