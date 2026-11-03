import { useState, useEffect } from "react";
import Timer from "./Timer"
import Third from "./Usereff";
import Pro from "./pro"


function App(){

    const [name, setName] = useState("");
    const [submitted, setSubmitted]= useState(false);


    const handleSubmit = (event)=>{
        event.preventDefault();
        setSubmitted(true);
    };

    useEffect(()=>{
        if (submitted){
            const existing = localStorage.getItem("name");
            let names = [];
            if (existing) {
                const parsed = JSON.parse(existing);
                names = Array.isArray(parsed) ? parsed : [parsed];
            }
            names.push(name);
            localStorage.setItem("name", JSON.stringify(names));
            setSubmitted(false);
        }
    }, [submitted, name]);


    return(
        <div>
             {/* <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            />

            <button type="submit">Save</button>
        </form> */}

            <Pro/>
        </div>
    );
}
export default App;




// Example #9

// import { useState, useEffect } from "react";


// function App(){
//     const [color, setColor]= useState("");

//     const colors = ["red", "blue", "green", "orange", "purple", "pink", "black"]

//     useEffect(()=>{

//     })


//     return(
//         <div>
//             <button onClick={()=> setColor([0+1])}></button>
//         </div>
//     )
// }

// export default App;


