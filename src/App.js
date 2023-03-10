import React, {useState} from "react";
import ShoppingList from "./components/ShoppingList";
import itemData from "./data/items";

function App() {

  const [isOn, setIsOn] = useState(false)
  function handleClick(){
    setIsOn( !isOn)
  }
  return (
    <div className={isOn ? "App dark" : "App light"} >
      <header>
        <h2>Urban Fresh Mart</h2>
        <button onClick={handleClick}>{isOn? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
