import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLatestRecursos } from './utils/queries/archivos'
import RecursosCardList from './components/recursos/recursos-card-list'
import Aside from './components/recursos/aside'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const latestRecursos = await getLatestRecursos()
  if (session === null) redirect('/auth/login')

  return (
    <main className="grid lg:grid-cols-3 gap-8 grid-cols-1 mt-4">
      <section className='lg:col-span-2'>
        <div className='flex flex-row gap-x-2'>
          <h1 className='text-2xl font-bold mb-3 text-white'>ePAUTA</h1>
          <h3 className='uppercase text-2xl font-light mb-3 text-white'>- Últimos recursos agregados</h3>
        </div>
        <RecursosCardList recursos={latestRecursos} grid={2} />
      </section>
      <Aside />
    </main>
  )
}
