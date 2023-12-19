
import image from './grocery.jpeg';
import './App.css';
import List from './List';
import GroceryImage from './GroceryImage';


function App() {
  const buttonOne = () => {
    console.log("hello");
  }

  const buttonTwo = () => {
      console.log("bye");
  }
  return (
    <div>
        <img src={image} alt="grocery" width="300px" />
        <List />
        <GroceryImage />
        <button onClick={buttonOne}>BUTTON</button>
        <button onClick={buttonTwo}>CANCEL</button>
    </div>
  )
}

export default App;
