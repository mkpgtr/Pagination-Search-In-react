import React from 'react'

const SingleCelebrity = ({name,location}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <span>{name}</span>
        <span>{location}</span>
    </div>
  )
}

export default SingleCelebrity