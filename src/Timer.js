// import { useState, useEffect, useRef } from "react";

// import { useEffect, useRef, useState } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);

//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (running) {
//       timerRef.current = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(timerRef.current);
//   }, [running]);
  
//   return (
//     <div>
//       <h1>{time}</h1>

//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>

//       <button onClick={() => {
//         setRunning(false);
//         setTime(0);
//       }}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Timer;




import { useState } from "react";

function Timer(){
   
    const [value, setValue] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (!value.trim()) return;

        setSubmitted(true);

        const existing = localStorage.getItem("name");
        let names = [];
        if (existing) {
            try {
                const parsed = JSON.parse(existing);
                names = Array.isArray(parsed) ? parsed : [parsed];
            } catch (e) {
                names = [];
            }
        }
        names.push(value);
        localStorage.setItem("name", JSON.stringify(names));

        setValue("");
        setSubmitted(false);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type here" onChange={(e)=>setValue(e.target.value) } ></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Timer;