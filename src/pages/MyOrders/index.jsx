import { useState } from "react"
import imgTenis from "../../assets/tenis.webp"
function HeaderCardOrders() {
    return (
        <div className="pb-3 px-2 flex md:justify-between justify-center text-base">
            <h1 className="font-semibold">Lista de pedidos</h1>
            <h1 className="font-light hidden md:block">Status Meus Pedidos</h1>
        </div>
    )
}
function MenuOrders() {
    const [menuOptionSelected, setMenuOptionSelected] = useState("Meus Pedidos")
    const options = ["Meus Pedidos", "Minhas Informações"]
    const handleSelection = (e) => {
        setMenuOptionSelected(e.target.value)
    }
    console.log(options.length - 1)
    return (
        <aside className=" bg-white w-full md:max-w-[251px]">
            <menu className="md:flex flex-col px-6 py-3 hidden md:bg-slate-100 rounded-md">
         
                {options.map((option, index)=>(
                    
                    <input className={`${option===menuOptionSelected?"text-orange-500":"stone-500"} 
                    text-start py-4 pl-1 text-bold
                     bg-slate-100 
                     w-full ${index!==options.length -1 && "border-b-[1px] border-stone-500"}`}
                    onClick={(e) => handleSelection(e)}
                    value={option}
                    key={index}
                    type="button"
                    />
                    
                   
                    
                
                ))}
                 
                
                
                
            </menu>
            <select className="bg-orange-500 w-full text-center text-zinc-50 text-base h-12 rounded-md font-semibold mb-6 outline-none md:hidden " 
            onChange={(e)=>handleSelection(e)}
            >
                <option value="Meus Pedidos">
                    Meus Pedidos
                </option>
                <option value="Minhas Informações">
                    Minhas Informações
                </option>
            </select>
        </aside>
    )
}
function CardOrders({ sale }) {
    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center border-t border-stone-500">
            <div className="flex gap-4 py-5 ">
                <img src={sale.img} alt={sale.product} className="h-20 w-18 rounded-md" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-black font-bold">{sale.product}</h1>
                    <p>{sale.category}</p>
                    <span className="text-orange-500 font-semibold">R$ {sale.price}</span>
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="md:hidden block">Status:</h1>
                <h1 className={`font-bold text-end ${sale.status === "Finalizado" ? "text-green-700" : "text-red-600"}`}>{sale.status}</h1>
            </div>

        </div>
    )
}
export default function MyOrders() {



    const sales = [
        { id: 1, img: imgTenis, product: "Nique Air Surf", category: "Tênis", price: "220,00", status: "Finalizado" },
        { id: 2, img: imgTenis, product: "Nique Air Surf", category: "Tênis", price: "220,00", status: "Esperando Pagamento" }
    ]

    return (
        <main className="flex flex-col md:flex-row   bg-white text-stone-500 w-screen px-8 md:px-12 lg:px-24 md:py-24 py-8 md:gap-8">

            <MenuOrders />
            <section className="bg-slate-100 py-8 px-11 flex flex-col justify-center w-full lg:max-w-[852px] md:max-w-[600px] rounded-md">
                <HeaderCardOrders />

                {sales.map((sale) => (
                    <CardOrders key={sale.id} sale={sale} />
                ))}

            </section>
        </main>
    )
}