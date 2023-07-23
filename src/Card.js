import React from 'react'
import './cart.scss'
const Card = ({ele}) => {
    let other = ele.htmlCode.toString();

  return (
    <div className='Card' style={{ padding: "10px" }}>
        <span
      dangerouslySetInnerHTML={{
        __html: other,
      }}
    ></span>
    <div className='name'>Name :  {ele.name}</div>
    <div className='category'>Category : {ele.category} </div>
    <div className='group'>Group : {ele.group}</div>
  </div>
  )
}

export default Card