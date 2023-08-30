import { getRamosInformatica } from '@/app/utils/queries/ramos'
import ModelPage from '../components/model-page'

export default async function Home () {
  const ramos = await getRamosInformatica()
  const malla = 'informática'

  return (
        <ModelPage ramos={ramos} malla={malla} />
  )
}
