import React from "react"
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const FloatIn = ({ children }) => {
    return <span>{children.split('').map((x, index) => {
        return <EachLetter delay={index}>{x}</EachLetter>
    })}</span>
}
export default FloatIn

const EachLetter = ({ children, delay }) => {
    let num = Math.floor(Math.random() * 400) - 200;
    let num2 = Math.floor(Math.random() * 400) - 200;
    const [customOpacity, setCustomOpacity] = React.useState(0)
    const [customTranslate, setTranslate] = React.useState(`translate(${num}px, ${num2}px)`)
    React.useEffect(() => {
        setTimeout(() => {
            setCustomOpacity(1);
            setTranslate(`translate(0,0)`)
        }, delay * 200)
    }, [delay])
    if (!alphabet.includes(children.toLowerCase())) {

        return <span>{' '}</span>
    }

    return <div style={{ opacity: customOpacity, transform: customTranslate, display: 'inline-block', transitionDuration: '1s' }}>{children}</div>
}