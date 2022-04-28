// import logo from './logo.svg';
import './App.css';
import CandyList from './CandyList.js';
import { candies } from './candies.js';
import FlowerList from './FlowerList.js';
import { flowers } from './flowers.js';
import SisterList from './SisterList.js';
import { sisters } from './sisters.js';
import BigThreeList from './BigThreeList.js';
import { bigThree } from './bigthree.js';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandyList candies={candies} />
      <FlowerList flowers={flowers} />
      <SisterList sisters={sisters} />
      <BigThreeList bigThree={bigThree} />
    </div>
  );
}

export default App;
