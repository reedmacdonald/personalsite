import React from "react"

export const WordWrapper = props => {
  const [fontWeight, setFontWeight] = React.useState(400)
  const [fontFamily, setFontFamily] = React.useState(null)
  return (
    <span
      onMouseEnter={() => {
        setFontWeight(fontWeight + Math.floor(Math.random() * 400) - 200)
        setFontFamily("Comic Sans MS")
      }}
      style={{
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
    let thing=props.children
    if (!Array.isArray(props.children)){
      thing=[props.children]
    }
    thing.forEach((string,index)=>{
      if (string.props){
        newArray.push(string)
      }else{
        string.split(' ').forEach((x,i)=>{
          newArray.push(<WordWrapper>{x + " "}</WordWrapper>)
        })
      }
    })

    setNewGraph(newArray)
  }, [props.children])
  return (
    <>
      <>{newGraph}</>
    </>
  )
}
