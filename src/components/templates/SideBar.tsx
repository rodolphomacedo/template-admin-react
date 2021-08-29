import { iconAdjustments, iconCalculate, iconGraph, iconHome } from "../Icons";
import ItemSideBar from "./ItemSideBar";
import Logo from "./Logo";

interface SideBarProps{
    url: string
    text: string
    icon: any
}

export default function SideBar(props: SideBarProps) {
    return (
        <aside>
            <div className={` 
                flex flex-col justify-center items-center
                bg-gradient-to-tr from-indigo-500 via-yellow-200 to-purple-800
                w-20 h-20
            `}>
                <Logo />
            </div>
            <ul>
                <ItemSideBar url='/' text="Home" icon={ iconHome } />
                <ItemSideBar url='/Adjustments' text="Ajustes" icon={ iconAdjustments } />
                <ItemSideBar url='/Calculate' text="Calcular" icon={ iconCalculate } />
                <ItemSideBar url='/Graph' text="Gráficos" icon={ iconGraph } />
            </ul>
        </aside>
    )
}