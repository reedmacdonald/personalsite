import React from "react"

const Popup = props => {
  const [showPopup, setShowPopup] = React.useState(false)
  return (
    <span style={{ position: "static" }}>
      {showPopup && (
        <span
          style={{
            position: "absolute",
            zIndex: "1000",
            backgroundColor: "white",
            padding: "3px 3px 3px 3px",
            display: "inlineBlock",
            transform: "translate(0%,-100%)",
            backgroundColor: "#DCDCDC",
            maxWidth: "300px",
          }}
        >
          {props.words}
        </span>
      )}
      <mark
        onMouseLeave={() => {
          setShowPopup(false)
        }}
        onMouseEnter={() => setShowPopup(true)}
      >
        {props.children}
      </mark>
    </span>
  )
}
export default Popup
