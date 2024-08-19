import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { CartProvider } from './Provider/CartProvider';
import { TodoProvider } from './Provider/TodoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <TodoProvider>
            <App />
        </TodoProvider>
    </CartProvider>
)
