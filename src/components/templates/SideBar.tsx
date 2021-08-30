import { iconAdjustments, iconCalculate, iconExit, iconGraph, iconHome } from "../Icons";
import ItemSideBar from "./ItemSideBar";
import Logo from "./Logo";

interface SideBarProps{
    url: string
    text: string
    icon: any
}

export default function SideBar(props: SideBarProps) {
    return (
        <aside className={`flex flex-col`}>
            <div className={` 
                flex flex-col justify-center items-center
                bg-gradient-to-tr from-indigo-500 via-yellow-200 to-purple-800
                w-20 h-20
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <ItemSideBar url='/' text="Home" icon={ iconHome } />
                <ItemSideBar url='/adjustments' text="Ajustes" icon={ iconAdjustments } />
                <ItemSideBar url='/calculate' text="Calcular" icon={ iconCalculate } />
                <ItemSideBar url='/graph' text="Gráficos" icon={ iconGraph } />
            </ul>

            <ul>
                <ItemSideBar 
                    onClick={() => console.log("Logout")} 
                    text="Exit" icon={ iconExit }
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white 

                    `}
                />
            </ul>

        </aside>
    )
}