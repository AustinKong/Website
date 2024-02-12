import LetterGrid from "../common/letter_grid/LetterGrid.jsx";

import './heroStyles.css'

const message = [
  {
    letter: 'A',
    coordinates: {
      x: 0,
      y: 0
    }
  }
]

const Hero = () => {
  return (
    <div className="hero">
      <h1>Hello world</h1>
      <LetterGrid message={message}/>
    </div>
  )
}

export default Hero;