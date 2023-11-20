import { Route, Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import MyOrders from "./pages/MyOrders"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="w-screen flex flex-col justify-center bg-blue-900 text-zinc-50 min-h-screen sh-full">
      <Header/>
      <NavBar />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/produtos" element={<Products/>} />
        <Route path="/categorias" element={<Categories/>}/>
        <Route path="/meus-pedidos" element={<MyOrders/>}/>

      </Routes>
      <Footer/>
       
    

    </div>
  )
}

export default App
