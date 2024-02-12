const Letter = ({ character, isHighlighted }) => {
  return (
    <h1 className={isHighlighted ? "highlighted-letter" : "letter"}>
      {character}
    </h1>
  )
}

export default Letter