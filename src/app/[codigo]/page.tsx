import RecursosRamo from './components/recursos-ramo'
import { getRecursosByRamo } from '../utils/queries/archivos'
import { getRamos } from '../utils/queries/ramos'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const RamoPage = async () => {
  const recursos = await getRecursosByRamo()
  const ramos = await getRamos()
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  const id = session?.user.id
  return (
    <>
      <RecursosRamo id={id} recursos={recursos} grid={3} ramos={ramos} />
    </>
  )
}

export default RamoPage
