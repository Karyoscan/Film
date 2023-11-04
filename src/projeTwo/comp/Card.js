import React from 'react'


const Card = (props) => {
 

  return (
    <div className='card-main'>
<div>
  <div className='card-sold'>{props.bilet? 'SOLD OUT':'ONLINE'}</div>
<img className='cards-img' src={props.resim} />
<div>
<span>
<i className="fa fa-star"></i>
</span>

<span>
 {props.puan} ({props.sayi}).USA
</span>

</div>

<p>{props.isim}</p>
<span className='card-span'>From ${props.price}</span>
<span> / person</span></div>


    </div>
  )
}

export default Card