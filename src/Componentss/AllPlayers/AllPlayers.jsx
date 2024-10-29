import propTypes from 'prop-types'
import { useEffect, useState } from "react";
import AllPlayer from "./AllPlayer";


const AllPlayers = ({handleSelectedPlayer}) =>{
    
    const [allPlayers, setAllPlayers] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllPlayers(data))
    },[])

    return(
        <div>
        <h1>all players: {allPlayers.length} </h1>
       
       <div className="grid grid-cols-3 space-y-10">
       {
           allPlayers.map((allPlayer) =><AllPlayer
           key={allPlayer.id}
           allPlayer={allPlayer}
           handleSelectedPlayer={handleSelectedPlayer}
           ></AllPlayer>)
        }
       
       </div>
        </div>
        
        
    )
}
AllPlayers.propTypes ={
    handleSelectedPlayer: propTypes.func
}
   
export default AllPlayers;
       