// Example no 1

// import { useRef } from "react";

// function Third(){

//     const myref = useRef(null)

//     const hanlefocus =()=>{

//         myref.current.focus();



//     };
//     return(

//         <div>
//             <input type="text" ref={myref}></input>
//             <button onClick={hanlefocus}>Focus</button>
//         </div>
//     )
// }


// export default Third;



// Example 2

// import { useRef } from "react";


// function Third(){


//     const myref = useRef(null)

//     const removeText = ()=>{
//         myref.current.value = "";

//     }


//     return(
//         <div>
//             <input type="text" ref={myref} placeholder="Type here"></input>
//             <button onClick={removeText}>Remove</button>
//         </div>
//     )
// }

// export default Third;


// Example 3

// import { useEffect, useRef } from "react";

// function Third(){
//     const myref = useRef(null)

//     useEffect(()=>{
//         myref.current.focus();


//     }, [])




//     return(
//         <div>
//             <input ref={myref} type="text" placeholder="Type here"></input>
//         </div>
//     )
// }

// export default Third;


// Example 4


import { useState, useEffect, useRef } from "react";

function App() {
  const [text, setText] = useState(
    localStorage.getItem("text") || ""
  );

  const [status, setStatus] = useState("Saved");
  const [history, setHistory] = useState([text]);
  const [index, setIndex] = useState(0);

  const timer = useRef(null);
  const input = useRef(null);

  // Input par focus
  useEffect(() => {
    input.current.focus();
  }, []);

  // Auto save
  useEffect(() => {
    setStatus("Saving...");

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      localStorage.setItem("text", text);
      setStatus("Saved");
    }, 1000);

    return () => clearTimeout(timer.current);
  }, [text]);

  // Refresh warning
  useEffect(() => {
    const warning = (e) => {
      if (text !== localStorage.getItem("text")) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", warning);

    return () => {
      window.removeEventListener("beforeunload", warning);
    };
  }, [text]);

  // Text change
  const handleChange = (e) => {
    const newText = e.target.value;

    setText(newText);

    const newHistory = history.slice(0, index + 1);
    newHistory.push(newText);

    if (newHistory.length > 20) {
      newHistory.shift();
    }

    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  // Undo
  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
      setText(history[index - 1]);
    }
  };

  // Redo
  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
      setText(history[index + 1]);
    }
  };

  return (
    <div>
      <h2>Text Editor</h2>

      <p>{status}</p>

      <button onClick={undo} disabled={index === 0}>
        Undo
      </button>

      <button
        onClick={redo}
        disabled={index === history.length - 1}
      >
        Redo
      </button>

      <br /><br />

      <textarea
        ref={input}
        value={text}
        onChange={handleChange}
        placeholder="Write something..."
        rows="10"
        cols="40"
      />
    </div>
  );
}

export default App;
