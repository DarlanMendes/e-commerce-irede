import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import MyOrders from "./pages/MyOrders"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { UserContext, UserProvider } from "./assets/contexts/userContext"
import { useContext, useEffect, useState } from "react"

function App() {
  const [isAuth, setIsAuth]=useState(true) 
 
 let user = useContext(UserContext)
 console.log(useContext(UserContext))
  
  return (
    <div className=" flex flex-col items-center bg-blue-900 text-zinc-50 min-h-screen overflow-hidden">
      <UserProvider>
        <Header />
        <NavBar />
        <div className=" flex justify-center items-center">

          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/meus-pedidos" element={!!user?<MyOrders />:<Navigate to="/sign-in"/>} />
            <Route path="/sign-in" element={!!user?<Navigate to="/"/>:<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

          </Routes>

        </div>
        <Footer />

      </UserProvider>



    </div>
  )
}

export default App
