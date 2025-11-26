import React from 'react'

function UserFavoriteAnimals(props) {
  return (
    <>
    <ul>
        {props.favAnimals.map(
            (animal, i)=>{
                return <li key={i}>{animal}</li>
            }
        )}
    </ul>
    </>
    
  )
}

export default UserFavoriteAnimals