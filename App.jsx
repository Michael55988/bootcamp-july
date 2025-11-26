import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercice3 from './Exercice3'


function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <>
    <p className='para'> Hello World</p>
    {myelement}
    <p>React is {sum} time better with JSK</p>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    <Exercice3/>
    </>
  )
}

export default App