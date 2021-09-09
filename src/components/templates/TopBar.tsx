import useAppData from "../../data/hook/UserAppData";
import Avatar from "./Avataruser";
import ThemeToggleButton from "./ThemeToggleButton";
import Title from "./Title";

interface TopBarProps{
    title: string
    subtitle: string
}

export default function TopBar(props: TopBarProps) {
 
    const {theme, toggleTheme} = useAppData()
 
    return (
        <div className={`flex `}>
            <Title title={ props.title } subtitle={ props.subtitle }/>
            <div className={`flex flex-grow justify-end items-center`}>
                <ThemeToggleButton theme={ theme } toggleTheme={ toggleTheme } />
                <Avatar className={`ml-3`}/>
            </div>
        </div>
    )
}