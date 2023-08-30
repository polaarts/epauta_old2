import { getRamosObras } from '@/app/utils/queries/ramos'
import ModelPage from '../components/model-page'

export default async function Home () {
  const ramos = await getRamosObras()
  const malla = 'obras-civiles'
  return (
        <ModelPage ramos={ramos} malla={malla} />
  )
}
