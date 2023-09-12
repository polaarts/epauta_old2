import { getRamosVespertinoInformatica } from '@/app/utils/queries/ramos'
import ModelPage from '../components/model-page'

export default async function Home () {
  const ramos = await getRamosVespertinoInformatica()
  const malla = 'informática y gestión'

  return (
        <ModelPage ramos={ramos} malla={malla} />
  )
}
