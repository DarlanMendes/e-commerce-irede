import imgTenis from "../../assets/tenis.webp"
function HeaderCardOrders() {
    return (
        <div className="pb-3 px-2 flex justify-between text-base">
            <h1 className="font-semibold">Lista de pedidos</h1>
            <h1 className="font-light">Status Meus Pedidos</h1>
        </div>
    )
}
function CardOrders({ sale }) {
    return (
        <div className="flex justify-between items-center border-t border-stone-500">
            <div className="flex xl:gap-4 py-5 ">
                <img src={sale.img} alt={sale.product} className="h-20 w-18 rounded-md" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-black font-bold">{sale.product}</h1>
                    <p>{sale.category}</p>
                    <span className="text-orange-500 font-semibold">R$ {sale.price}</span>
                </div>
            </div>
            <h1 className={`font-bold ${sale.status==="Finalizado"?"text-green-700":"text-red-600"}`}>{sale.status}</h1>
        </div>
    )
}
export default function MyOrders() {



    const sales = [
        { id: 1, img: imgTenis, product: "Nique Air Surf", category: "Tênis", price: "220,00", status: "Finalizado" },
        { id: 1, img: imgTenis, product: "Nique Air Surf", category: "Tênis", price: "220,00", status: "Esperando Pagamento" }
    ]

    return (
        <main className="flex justify-center items-center bg-white text-stone-500 w-screen  py-24 lg:gap-8">

            <aside className="bg-slate-100">
                Menu
            </aside>
            <section className="bg-slate-100 py-8 px-11 flex flex-col justify-center w-full xl:max-w-[852px] rounded-md">
                <HeaderCardOrders />

                {sales.map((sale) => (
                    <CardOrders key={sale.id} sale={sale} />
                ))}

            </section>
        </main>
    )
}