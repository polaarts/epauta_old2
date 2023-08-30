import { getRamosIndustrial } from '@/app/utils/queries/ramos'
import ModelPage from '../components/model-page'

export default async function Home () {
  const ramos = await getRamosIndustrial()
  const malla = 'industrial'
  return (
        <ModelPage ramos={ramos} malla={malla} />
  )
}
