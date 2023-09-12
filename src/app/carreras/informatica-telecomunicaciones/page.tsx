import { getRamosInformatica } from '@/app/utils/queries/ramos'
import ModelPage from '../components/model-page'

export default async function Home () {
  const ramos = await getRamosInformatica()
  const malla = 'informática y telecomunicaciones'

  return (
        <ModelPage ramos={ramos} malla={malla} />
  )
}
