import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import logoERede from "../../assets/logo-e-rede.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState, useEffect} from "react";
import { UserContext } from "../../assets/contexts/userContext";

function Botoes() {

    const user = useContext(UserContext)
    
    return (
        <div className="flex justify-center items-center md:w-full max-w-[289px] gap-5">
            {user?
                <div className="flex items-center justify-center gap-5">
                    <img src={user.avatar} alt="" className="h-10 w-10 rounded-full hidden lg:block" />
                    <h1 className="hidden lg:block">Olá , {user.name}</h1>
                </div>

                :
                <>
                    <Link to="sign-up" className="hidden md:flex">Cadastre-se</Link>
                    <Link to="sign-in" className="bg-orange-500 h-10 w-32 rounded-lg items-center justify-center  hidden md:flex">Entrar</Link>
                </>

            }

            <MdOutlineShoppingCart className="text-white text-2xl" />
        </div>
    )
}


function InputHeader() {
    return (
        <div className="text-stone-500 text-base px-3 w-full md:max-w-[520px] h-11 relative">
            <input className="bg-zinc-50 flex gap-2 w-full left-0 rounded-md
                items-center px-3 absolute h-11
                 outline-none
                  placeholder:text-stone-500 pl-11"
                placeholder="Buscar"
            />
            <IoMdSearch className="text-2xl absolute h-11 ml-3 left-0" />

        </div>
    )
}


function LogoHeader() {
    return (
        <div className="flex flex-col justify-center items-start md:w-full max-w-[206px]">
            <img src={logoERede} alt="Logo E-rede" className=" h-[28px]" />
        </div>

    )
}
function MenuHamburguer() {
    return (
        <div className=" flex justify-start items-center md:hidden">
            <GiHamburgerMenu className="text-2xl" />
        </div>
    )
}

export default function Header() {
    const location = useLocation()
    const pathMatches = location.pathname === "/sign-up" || location.pathname === "/sign-in"

    return (
        <>
            {!pathMatches ?
                <header className={`p-8 lg:px-[107px] w-full max-w-[1440px]`}>

                    <div className={`flex flex-row justify-between  place-content-between items-center  w-full max-w-[1226px] pb-3 md:pb-0} `}>
                        <MenuHamburguer />
                        <LogoHeader />
                        <div className="hidden md:flex w-full md:max-w-[300px] lg:max-w-[520px]">
                            <InputHeader />
                        </div>

                        <Botoes />

                    </div>
                    <div className="flex md:hidden">
                        <InputHeader />
                    </div>

                </header>
                :
                <></>
            }
        </>



    )
}