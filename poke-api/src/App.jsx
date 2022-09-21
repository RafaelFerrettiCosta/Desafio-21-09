import { useState } from 'react'
import * as Style from './style'
import Top from './assets/top.png'
import Pokebola from './assets/pokeball-png.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Style.Page>
      <Style.Nav>
        <Style.Logo src={Top} />
        <Style.Poke src={Pokebola} />
      </Style.Nav>
      <div className='titulo'>
      <h1>Pokédex</h1>
      </div>
    </Style.Page>
  )
}

export default App
