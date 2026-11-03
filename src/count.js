// import { useState, useEffect } from "react";

// // USESTATE #1
// export function Example1() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       Count : {count}
//       <button onClick={() => setCount(count + 1)}>
//         Click here
//       </button>
//     </div>
//   );
// }

// // USEEFFECT #1
// export function Example2() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setMessage(" Enter your name here");
//     }, 3000);
//   });

//   return (
//     <div>
//       <span>Message will show here{message}</span>
//     </div>
//   );
// }

// // Example 3
// export function Example3() {
//   const [message, setMessage] = useState("");
//   const [number, setNumber] = useState(10);

//   useEffect(() => {
//     if (number === 0) {
//       setMessage("Session Expired");
//       return;
//     }

//     const timer = setTimeout(() => {
//       setNumber(number - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [number]);

//   return (
//     <div>
//       <h1>Number: {number}</h1>
//       <h1>Message : {message}</h1>
//       <button className="btn" onClick={() => { setNumber(10); setMessage("") }}>Rest</button>
//     </div>
//   );
// }

// // Examlpe #4
// export function Example4() {
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     document.title = title;
//   }, [title]);

//   return (
//     <div>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//     </div>
//   );
// }

// // Example #5
// export function Example5() {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setCount(message.length);
//   }, [message]);

//   return (
//     <div>
//       <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <h2>Characters : {count}</h2>
//     </div>
//   );
// }

// // Example #6
// export function Example6() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setMessage("Hurrrryyyyyy");
//   }, []);

//   return (
//     <div>
//       {message}
//     </div>
//   );
// }

// // Example # 7
// export function Example7() {
//   const [name, setName] = useState("");

//   useEffect(() => {
//     localStorage.setItem("name", name);
//   }, [name]);

//   return (
//     <div>
//       <input type="text" value={name} placeholder="write here" onChange={(e) => setName(e.target.value)} />
//       <button onClick={() => localStorage.setItem("name", name)}>Submit</button>
//       <p>Your name: {name}</p>
//     </div>
//   );
// }

// // Example #9
// export function Example9() {
//   const [color, setColor] = useState("");

//   const colors = ["red", "blue", "green", "orange", "purple", "pink", "black"];

//   useEffect(() => {

//   });

//   return (
//     <div>
//       <button onClick={() => setColor(colors[0 + 1])}></button>
//     </div>
//   );
// }









