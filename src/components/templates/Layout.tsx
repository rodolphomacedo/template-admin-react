import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";


interface LayoutProps{
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col h-screen 
            justify-center items-center
            bg-gradient-to-br from-red-200 to-blue-200
            
        `}>
            <TopBar title={ props.title } subtitle={ props.subtitle }/>
            <SideBar />
            <Content>
                { props.children }
            </Content>
        </div>
    )
}