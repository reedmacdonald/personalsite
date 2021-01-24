import React from "react"

export const WordWrapper = props => {
  function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  const [color, setColor] = React.useState(null)
  const [fontWeight, setFontWeight] = React.useState(400)
  const [fontFamily, setFontFamily] = React.useState(null)
  return (
    <span
      onMouseEnter={() => {
        setColor(getRandomColor)
        setFontWeight(fontWeight + Math.floor(Math.random() * 400) - 200)
        setFontFamily("Comic Sans MS")
      }}
      style={{
        //color: color,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
      }}
    >
      {props.children}
    </span>
  )
}
export const SansWrapper = props => {
  const [newGraph, setNewGraph] = React.useState(props.children)
  React.useEffect(() => {
    let newArray = []
    props.children[0].split(" ").forEach((x, i) => {
      newArray[i] = <WordWrapper>{x + " "}</WordWrapper>
    })
    setNewGraph(newArray)
  }, [props.children])
  return (
    <>
      <>{newGraph}</>
    </>
  )
}
