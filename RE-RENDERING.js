import {useState} from 'react';

function App(){
const[count,setCount]=useState(99);


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