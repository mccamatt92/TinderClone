import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import "../Cards/Cards.css"
import axios from '../../axios.js'





function Cards() {
    const [people, setPeople] = useState([ ])
const swiped =(direction,nameToDelete)=>{

}

const outOfFrame=(name)=>{

}


useEffect(() => {
async function fetchData(){
    const req = await axios.get('/tinder/card')
    setPeople(req.data);
}
fetchData()
}, [])



    return (
        <div className="cards">
            <div className="tinderCards__cardContianer">
            {people.map(person=>(
              <TinderCard className="swipe"
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir)=>swiped(dir,person.name)}
              onCardLeftScreen={()=>outOfFrame(person.name)}
              >
                  <div
                   style={{backgroundImage:`url(${person.imgUrl})`}} className="card">
                       <h3>{person.name}</h3>
                   </div>
              </TinderCard>
            ))}
            </div>

        </div>
    )
}

export default Cards
