import { Fragment } from "react"
import Hooks from "./Pages/Hooks"
import { Toaster } from "react-hot-toast"

const App = () => {
    
    return (
        <Fragment>
            <Hooks />
            <Toaster position="top-right"/>
        </Fragment>
    )
}


export default App