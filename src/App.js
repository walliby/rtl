import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSumbit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  function handleClear() {
    setUsername("");
    setIsSubmitted(false);
  }

  return (
    <div className="App">
      <h1>This is my RTL Demo app</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      <h2>Your username is: {isSubmitted && username}</h2>
    </div>
  );
}

export default App;
