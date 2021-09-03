import Layout from "../components/templates/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/UserAppData";


export default function Adjustments() {

  const { theme, toggleTheme } = useAppData()

  return (
    <div>
      <Layout 
        title='Ajustes & Configurações' 
        subtitle='Opções de configurações do sistema.'>
          <span>Notificações</span>
      </Layout>
    </div>
  )
}
