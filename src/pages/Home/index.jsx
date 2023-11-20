import tenis from "../../assets/tenis.webp"
function Card({ highlighted }) {
    return (
        <div className=" shadow-sm w-44 h-64 rounded-md bg-white">
            <img src={highlighted.img} alt="card produto " className="h-32 w-44 object-cover" />
            <div className="px-3 py-2 ">
                <h1 className="text-blue-900 font-bold">{highlighted.tittle}</h1>
                <span className="text-stone-500">{highlighted.category}</span>
                <h3 className="text-orange-500 font-semibold">{highlighted.price}</h3>
                <button className="bg-blue-900 w-20 h-6 rounded-md text-center text-[12px]"> Comprar </button>
            </div>

        </div>
    )
}

function Destaques() {
    const highlighted = {
        tittle: "Nique Air Surf",
        img: tenis,
        category: "Tênis",
        price: "R$ 220,00"
    }
    const highlighteds = [highlighted, highlighted, highlighted, highlighted, highlighted, highlighted, highlighted]
    return (
        <div className="bg-zinc-50  w-screen flex flex-col xl:px-24 ">

            <h1 className="text-blue-900 font-semibold text-xl py-6 ml-5">Destaques</h1>
            <div className="grid xl:grid-cols-5 md:grid-cols-4 justify-start gap-10 ">
                {highlighteds.map((highlighted, index) => (
                    <div key={index} >
                        <Card highlighted={highlighted} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default function Home() {
    return (
        <main>
            <section className="flex flex-wrap py-10">
                <Destaques />
            </section>
        </main>
    )
}