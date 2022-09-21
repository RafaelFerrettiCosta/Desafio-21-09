import './style.css';
import {Home} from "../components/Home/index.js";
// import pkBall from '../assets/pokeball.png';
// import pkMag from '../assets/magnifying-glass.png';
// import pkBG from '../assets/poke-background.png';

export const App = () => {
  return (
    <div className='global-container'>
    <header>
      <div className='header-container'>
        <h1>PokeFinder</h1>
      </div>
    </header>
    <div className='table-container'>
    <Home />
    </div>
    <footer>
      <h1>aqui esta o footer</h1>

    </footer>

    
    
    </div>
  );
}
