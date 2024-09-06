import {useState} from 'react';
import AnimalShow from './Animalshow';
function getRandomAnimal(){
    const animals = ['bird','cow','cat','dog','horse'];

    return animals[Math.floor(Math.random()*animals.length)]
}
console.log(getRandomAnimal());
function App(){

const[count,setCount]=useState(0);

    const handleclick =()=>{
        setCount(count+1);
console.log("Button was clicled!")
    };
    return(
        <div>
            <button onClick={handleclick}>Add animal</button>
            <div>
                Number of Animals:{count}
            </div>
        </div>
    );
}
export default App;