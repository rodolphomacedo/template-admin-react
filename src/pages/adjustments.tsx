import Layout from "../components/templates/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/UserAppData";


export default function Adjustments() {

  const context = useAppData()

  return (
    <div>
      <Layout 
        title='Ajustes & Configurações' 
        subtitle='Opções de configurações do sistema.'>
        <h3>{ context.name }</h3>
      </Layout>
    </div>
  )
}
