import React, { useState } from 'react'
import './main.css'
import Navbar from './comp/Navbar'
import Card from './comp/Card'
import db from './db'

const Main = () => {
const [base, setBase] = useState(db)

 const card= base.map((element)=>{return(
 <div key={element.id} className='card'>

<Card 
resim = {element.resim}
isim = {element.isim}
price = {element.price}
puan = {element.puan}
sayi = {element.sayi}
bilet = {element.bilet}
/>

</div>
 



 ) })


  return (
    <div>
      <Navbar/>
      <div className='cards'>
      {card}

      </div>
    </div>
  )
}

export default Main