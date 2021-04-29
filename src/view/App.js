import SignUp from "./SignUp.js"

const App = () => {
    const main = document.createElement("main")
    main.appendChild(SignUp())
    return main 
}

export default App