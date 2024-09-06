import {useState} from 'react';
// function useState(defaultValue){
//     return{
//         yourState : defaultValue,
//         yourSetter: ()=>{}

//     };
// }

function App(){
    // const Stateconfig = useState(0);
    // const count = stateconfig.yourState;
    // const setCount = staeconfig.yourSetter;
// function makearray(){
//     return[13,4,59];
// }

// const myArray=makearray();
// const firstelement =myArray[0];
// const secondelement=myArray[1];


// const[firstelement,secondelement]=makeArray();
// console.log(firstelement,secondelement);


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