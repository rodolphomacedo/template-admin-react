import { iconAdjustments, iconCalculate, iconGraph, iconHome } from "../Icons";
import ItemSideBar from "./ItemSideBar";

interface SideBarProps{
    url: string
    text: string
    icon: any
}

export default function SideBar(props: SideBarProps) {
    return (
        <aside>
            <ul>
                <ItemSideBar url='/' text="Home" icon={ iconHome } />
                <ItemSideBar url='/Adjustments' text="Ajustes" icon={ iconAdjustments } />
                <ItemSideBar url='/Calculate' text="Calcular" icon={ iconCalculate } />
                <ItemSideBar url='/Graph' text="Gráficos" icon={ iconGraph } />
            </ul>
        </aside>
    )
}