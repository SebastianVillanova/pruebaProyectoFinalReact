import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/* import ItemCount from "./ItemCount/ItemCount"; */
//importamos bulma
import "bulma/css/bulma.css";
//react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom";
//importamos contexto del carrito de compras
import { CartProvider } from "./context/CartContext";
//importamos componente de cart
import Cart from "./components/Cart/Cart";
/* Checkout */
import Checkout from "./components/Checkout/Checkout";

function App(){
    return(
    
        <div className="container">
            
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!!!"}/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    </Routes>   
                </CartProvider>
            </BrowserRouter>           
        </div>
    );
}

export default App;


// Cambie class por className en Item, itemCount y CartContext