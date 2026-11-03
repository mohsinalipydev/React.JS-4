import { useState, useEffect, useRef } from "react";
import "./css/pro.css";

function Pro() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([""]);
  const [index, setIndex] = useState(0);

  const myref = useRef(null);
  const timerRef = useRef(null);

  const undo = () => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      setText(history[prevIndex]);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setText(history[nextIndex]);
    }
  };

  useEffect(() => {
    myref.current.focus();
  }, []);

  useEffect(() => {
    const h = JSON.parse(localStorage.getItem("history") || "[]");
    if (h.length) {
      setHistory(h);
      setIndex(h.length - 1);
      setText(h.at(-1) || "");
    }
  }, []);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setStatus("Saving...");

    const newHistory = history.slice(0, index + 1);
    newHistory.push(newText);
    while (newHistory.length > 20) {
      newHistory.shift();
    }
    setHistory(newHistory);
    setIndex(newHistory.length - 1);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (newText.trim() !== "") {
        localStorage.setItem("text", newText);
        localStorage.setItem("history", JSON.stringify(newHistory));
      }
      setStatus("Saved");
    }, 1000);
  };

  return (
    <div>
      <h1>Text Editor</h1>
      <div className="editor-box">
        <span id="ttt" style={{ color: status === "Saved" ? "green" : status === "Saving..." ? "red" : "transparent" }}>
          {status}
        </span>
        <textarea className="txt" rows={10} cols={40} value={text} ref={myref} onChange={handleChange}
          placeholder="Type Here..."
        ></textarea>
      </div>
      <div className="buttons">
        <button onClick={undo} disabled={index === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={index === history.length - 1}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default Pro;
