import Hooks from "./Pages/Hooks"
import { Toaster } from "react-hot-toast"
import EcommercePage from "./Pages/EcommercePage"
import { TodoProvider } from "./Provider/TodoProvider"
import { CartProvider } from "./Provider/CartProvider"
import SampleComponent from "./Components/SampleComponent"
import UseEffect from "./Components/useEffect"
import ProductPage from "./Pages/ProductPage"

const App = () => {
    
    return (   
        <CartProvider>
            <TodoProvider>
                {/* <Hooks /> */}
                {/* <EcommercePage /> */}
                {/* <SampleComponent /> */}
                {/* <UseEffect /> */}
                <ProductPage />
                <Toaster position="top-right"/>
            </TodoProvider>
        </CartProvider>
    )
}


export default App