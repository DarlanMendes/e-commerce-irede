import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import logoERede from "../../assets/logo-e-rede.png"
export default function Header() {
    return (
        <header className="flex w-screen justify-center py-11 gap-16">
            <div>
                <img src={logoERede} alt="Logo E-rede"/>
            </div>
            <div className="text-stone-500 text-base px-3 w-full max-w-[520px] h-11 a">
                <input className="bg-zinc-50 flex gap-2 
                items-center rounded-sm px-3 absolute h-11
                 w-full max-w-[520px] outline-none
                  placeholder:text-stone-500 pl-11"
                    placeholder="Buscar"
                />
                <IoMdSearch className="text-2xl absolute h-11 ml-3" />

            </div>

            <div className="flex justify-center items-center">
                <Link to="sign-up">Cadastre-se</Link>
                <Link to="sign-in" className="bg-orange-500 h-10 w-32 rounded-lg flex items-center justify-center mx-5">Entrar</Link>
                <MdOutlineShoppingCart className="text-white text-base" />
            </div>
        </header>
    )
}