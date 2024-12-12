import React from 'react'

const watches = () => {
const watchData=[
  {id: 1, name:'Rolex', price: '12000', description:"Luxury watch",image:"/image1.png"},
  {id: 2, name:'Omega', price: '12000', description:"Sporty watch",image:"/image2.png"},
  {id: 3, name:'Citizen', price: '12000', description:"Elegant watch",image:"/image3.png"},
  {id: 4, name:'Seiko', price: '12000', description:"Sporty and Stylish watch",image:"/image7.png"},
  {id: 5, name:'Bretling', price: '12000', description:"Bold watch",image:"/image9.png"},
  {id: 6, name:'Tag Heuer', price: '12000', description:"Affordable watch",image:"/image8.png"},



]

  return (
    <div>
    <div className='watches'>
      {watchData.map((watch)=>(
        <div key={watch.id}className='watch-card'>
<img src={watch.image} alt={watch.name}></img>
<h3>{watch.name}</h3>
<p>{watch.description}</p>
<div className='price'>${watch.price}</div>
</div>
      )
      )}
      </div>
    </div>
  )
}

export default watches
