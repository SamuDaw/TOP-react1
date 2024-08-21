import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  //Another way but same
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    // <div>
    //   <h1>Animals: </h1>
    //   <ul>
    //     <li>Lion</li>
    //     <li>Cow</li>
    //     <li>Snake</li>
    //     <li>Lizard</li>
    //   </ul>
    // </div>
    <div>
      <h1>Animals: </h1>
      <ul>
        {/* {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })} */
        animalsList}
      </ul>
    </div>
  )
}

export default App
