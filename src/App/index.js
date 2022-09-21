import { ContextProvider } from '../context/pokemonsContext';
import Home from '../screens/Home';
import './style.css'

export const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
