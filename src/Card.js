import React from 'react'
import './cart.scss'
const Card = ({ele,isMobile}) => {
    let other = ele.htmlCode.toString();
console.log(ele.htmlCode.length,"$#%@$#")
  return (
    <div className={isMobile ? 'Card mob' :'Card'} style={{ padding: "10px" }}>
        <span
      dangerouslySetInnerHTML={{
        __html: ele.htmlCode.toString(),
      }}
    ></span>
    <div className='name'>Name :  {ele.name}</div>
    <div className='category'>Category : {ele.category} </div>
    <div className='group'>Group : {ele.group}</div>
  </div>
  )
}

export default Card