import { iconAdjustments, iconCalculate, iconExit, iconGraph, iconHome } from "../Icons";
import ItemSideBar from "./ItemSideBar";
import Logo from "./Logo";


export default function SideBar() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-900
            dark:bg-gray-900 dark:text-gray-200
        `}>
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
                        text-red-600 dark:text-red-400
                        hover:bg-red-400  dark:hover:bg-red-900
                        hover:text-white dark:hover:text-gray-300
                    `}
                />
            </ul>

        </aside>
    )
}