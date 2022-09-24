import React from 'react'
import './App.css';
import Likes from './Likes'

const LikeTotal = ({ totalLikes }) => {
  return (
    <p>{totalLikes}</p>
  )
}

export default LikeTotal