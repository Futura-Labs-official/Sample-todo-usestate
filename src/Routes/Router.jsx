import { TbError404 } from "react-icons/tb"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsList from "../Components/ProductsList"
import SingleProduct from "../Components/SingleProduct"
import Error404 from "../Pages/Error404"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="shop">
                        <Route path="" Component={ProductsList} /> 
                        <Route path="v/:product_id?" Component={SingleProduct} /> 
                    </Route>
                </Route>
                <Route path="*" Component={Error404}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
