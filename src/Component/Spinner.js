import React from 'react'
import { BeatLoader } from 'react-spinners'
const Spinner = ({ size = 30 }) => {
  return (
    <div style={{textAlign:'center', transform: `translate(-50px, 50px)` }}>
    <BeatLoader color="#36d7b7" size={size} />
    </div>
  )
}

export default Spinner;
