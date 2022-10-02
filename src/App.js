import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
