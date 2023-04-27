import React, {useState } from 'react'
import PetList from './Petlist'


const app = ()=>{
  const [pet , setPet] = useState ([
  {
    name: "jack" ,
    race : "berger", 
    type: "Dog" ,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AUl30hYN4wOYZBw-E0ZlaJBTmeolZ67wi5tzB4dCW-Uo2UOuKKobGrYFWzQvBt21B_M&usqp=CAU"
  },
  {
    name: "Oscar" ,
    race : "berger du caucase", 
    type: "Dog" ,
    photo: "https://www.woopets.fr/assets/races/000/052/small_portrait/berger-du-caucase.jpg"
  },
  {
    name: "Mickey" ,
    race : "rottweiler", 
    type: "Dog" ,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiRKf1dZNJNRcgZihgtBFbARNjB2VzR8Tdw&usqp=CAU"
  }
  ])

const handleSearch = (value)=> {
setPet (...pet.filter((el)=>el.name === value) )

}

  return (
    <div>
  <filter handleSearch={handleSearch}/>
  <PetList pets={pet}/>






    </div>
  )
}