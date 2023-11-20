import { Link } from "react-router-dom"

function LeftInformation() {
    const infosPagina = [
        { id: 1, tittle: "Sobre o E-Rede Store", url: "/sobre" },
        { id: 2, tittle: "Segurança", url: "/segurança" },
        { id: 3, tittle: "Lista de desejos", url: "/lista-de-desejos" },
        { id: 4, tittle: "Trabalhe conosco", url: "/trabalhe-conosco" },
    ]
    return (
        <ul className="font-semibold text-[10px] ">
            <p className="pb-[14px]">Informações</p>
            {infosPagina.map((info) => (
                <li key={info.id} className="pl-[2px] pb-2">
                    <Link to={info.url} className="text-white font-light">{info.tittle}</Link>
                </li>
            ))}

        </ul>
    )
}
function RightInformation() {
    const infosPagina = [
        { id: 1, tittle: "Tênis", url: "/categoria/tenis" },
        { id: 2, tittle: "Camiseta", url: "/categoria/camiseta" },
        { id: 3, tittle: "Acessórios", url: "/categoria/acessorios" },
        { id: 4, tittle: "Esportivo", url: "/categoria/esportivo" },
    ]
    return (
        <ul className="font-semibold text-[10px] ">
            <p className="pb-[14px] ">Informações</p>
            {infosPagina.map((info) => (
                <li key={info.id} className="pl-[2px] pb-2">
                    <Link to={info.url} className="text-white font-light">{info.tittle}</Link>
                </li>
            ))}

        </ul>
    )
}

export default function Footer() {
    return (
        <footer className="border flex flex-col p-6" >
            <div className="border">
                1
            </div>
            <div className="border flex ">
                <div className="flex-1">
                <LeftInformation/>
                   
                </div>
                <div className="flex-1">
                    <RightInformation/>
                </div>

            </div>
            <div className="border">
                3
            </div>
        </footer>

    )
}