import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/Swipe/SwipeButtons';

function App() {
  return (
    <div className="App"> 
    <Header/>
    <Cards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
